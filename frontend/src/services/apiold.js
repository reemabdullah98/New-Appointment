// src/services/api.js

// ====== الإعدادات العامة ======
const API_BASE =
  (import.meta?.env?.VITE_API_BASE?.replace(/\/+$/, '')) || 'http://localhost:5000/api';

// ثوابت البادئات حسب الراوتر عندك
// عدّليها إذا لزم (مثلاً لو عندك /api/auth بدل /api/users)
const APPOINTMENTS_PREFIX = '/appointments';
const USERS_PREFIX = '/users';       // أو '/auth' عند بعض المشاريع
const SERVICES_PREFIX = '/services';

// ====== دالة طلب موحّدة مع معالجة أخطاء لطيفة ======
async function request(path, { method = 'GET', body, headers = {} } = {}) {
  const url = `${API_BASE}${path}`;
  const opts = {
    method,
    headers: { 'Content-Type': 'application/json', ...headers },
  };
  if (body !== undefined) opts.body = JSON.stringify(body);

  const res = await fetch(url, opts);

  // حاول نقرأ JSON حتى مع الأخطاء
  let data = null;
  try {
    data = await res.clone().json();
  } catch {
    // ممكن يكون 204 أو ردّ بدون جسم
  }

  if (!res.ok) {
    const msg = (data && (data.error || data.message)) || HTTP `${res.status}`;
    throw new Error(msg);
  }

  return data; // ممكن يكون null مع 204
}

// ====== المواعيد ======
export async function getAppointments() {
  return request(`${APPOINTMENTS_PREFIX}, { method: 'GET' }`);
}

export async function createAppointment(payload) {
  // payload: { user_id, service_id, appointment_date, appointment_time } أو {name, phone, ...}
  return request(`${APPOINTMENTS_PREFIX}, { method: 'POST', body: payload }`);
}

export async function deleteAppointment(id) {
  return request(`${APPOINTMENTS_PREFIX}/${id}, { method: 'DELETE' }`);
}

// (اختياري) تعديل موعد
export async function updateAppointment(id, payload) {
  return request(`${APPOINTMENTS_PREFIX}/${id}, { method: 'PUT', body: payload }`);
}


export async function registerUser({ name, email, password }) {
  return request(`${USERS_PREFIX}`/register, {
    method: 'POST',
    body: { name, email, password },
  });
}

export async function loginUser({ email, password }) {
  return request(`${USERS_PREFIX}`/login, {
    method: 'POST',
    body: { email, password },
  });
}

// ====== الخدمات (Services) ======
export async function getServices() {
  return request(`${SERVICES_PREFIX}, { method: 'GET' }`);
}

export async function createService(payload) {
  // payload: { name, price, description }
  return request(`${SERVICES_PREFIX}, { method: 'POST', body: payload }`);
}

export async function deleteService(id) {
  return request(`${SERVICES_PREFIX}/${id}, { method: 'DELETE' }`);
}


export default {
  getAppointments,
  createAppointment,
  deleteAppointment,
  updateAppointment,
  registerUser,
  loginUser,
  getServices,
  createService,
  deleteService,
};