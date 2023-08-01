import { createRouter, createWebHistory} from 'vue-router'


const routes = [
    {
        path: '/login-layout',
        redirect: '/login',
        name: 'login layout',
        component: () => import( /* webpackChunkName: "login layout" */ '../views/auth/LoginLayout.vue'),
        children : [
            {
                path: '/login',
                name: 'login',
                component: () => import( /* webpackChunkName: "login" */ '../views/auth/Login.vue')
            },
            {
                path: '/otp',
                name: 'otp',
                component: () => import( /* webpackChunkName: "otp" */ '../views/auth/OTP.vue')
            },
            {
                path: '/register',
                name: 'register',
                component: () => import( /* webpackChunkName: "register" */ '../views/auth/Register.vue')
            },
        ]
    },

    {
        path: '/',
        redirect: '/dashboard',
        name: 'dashboard layout',
        component: () => import( /* webpackChunkName: "dashboard layout" */ '../views/DashboardLayout.vue'),
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                component: () => import( /* webpackChunkName: "dashboard" */ '../views/Dashboard.vue')
            },
            {
                path: '/profile',
                name: 'profile',
                component: () => import( /* webpackChunkName: "profile" */ '../views/Profile.vue')
            },
            {
                path: '/prescription-layout',
                redirect: '/prescription-form',
                name: 'prescription layout',
                component: () => import( /* webpackChunkName: "prescription layout" */ '../views/Prescription/PrescriptionLayout.vue'),
                children: [
                    {
                        path: '/prescription-form',
                        name: 'prescription form',
                        component: () => import( /* webpackChunkName: "prescription form" */ '../views/Prescription/PrescriptionForm.vue')
                    },
                    {
                        path: '/prescription',
                        name: 'prescription',
                        component: () => import( /* webpackChunkName: "prescription" */ '../views/Prescription/Prescription.vue')
                    },
                    {
                        path: '/appointment-form',
                        name: 'appointment-form',
                        component: () => import( /* webpackChunkName: "appointment" */ '../views/Prescription/AppointmentForm.vue')
                    },
                    {
                        path: '/appointment-status',
                        name: 'appointment status',
                        component: () => import( /* webpackChunkName: "appointment status" */ '../views/Prescription/AppointmentStatus.vue')
                    },
                ]
            },
            {
                path: '/medicine-list',
                name: 'medicine list',
                component: () => import( /* webpackChunkName: "medicine layout" */ '../views/Medicine/MedicineLayout.vue'),
            },
            {
                path: '/medicine',
                name: 'medicine',
                component: () => import( /* webpackChunkName: "medicine" */ '../views/Medicine/MedicinePage.vue')
            },
            {
                path: '/add-medicine',
                name: 'add medicine',
                component: () => import( /* webpackChunkName: "add medicine" */ '../views/Medicine/AddMedicine.vue')
            },
            {
                path: '/account',
                redirect: '/account/edit',
                name: 'account',
                component: () => import( /* webpackChunkName: "account layout" */ '../views/AccountLayout/AccountLayout.vue'),
                children: [
                    {
                        path: '/account/edit',
                        name: 'account edit',
                        component: () => import( /* webpackChunkName: "account edit" */ '../views/AccountLayout/Edit.vue')
                    },
                    {
                        path: '/account/bills',
                        name: 'account bills',
                        component: () => import( /* webpackChunkName: "account bills" */ '../views/AccountLayout/Bills.vue')
                    },
                    {
                        path: '/account/visits',
                        name: 'account visits',
                        component: () => import( /* webpackChunkName: "account visits" */ '../views/AccountLayout/Visits.vue')
                    },
                    {
                        path: '/account/appointment',
                        name: 'account appointment',
                        component: () => import( /* webpackChunkName: "account appointment" */ '../views/AccountLayout/Appointments.vue')
                    },
                    {
                        path: '/account/lab-report',
                        name: 'account lab report',
                        component: () => import( /* webpackChunkName: "account lab report" */ '../views/AccountLayout/LabReport.vue')
                    },
                ]
            },
            {
                path: '/consult-form',
                name: 'consult form',
                component: () => import( /* webpackChunkName: "consult form" */ '../views/Consultation/ConsultForm.vue')
            },
            {
                path: '/consultation',
                name: 'consultation',
                component: () => import( /* webpackChunkName: "consultation" */ '../views/Consultation/Consultation.vue')
            },
            {
                path: '/consultation-layout',
                name: 'consultation layout',
                component: () => import( /* webpackChunkName: "consultation layout" */ '../views/Consultation/ConsultationLayout.vue'),
                children: [
                    {
                        path: '/visits',
                        name: 'visits',
                        component: () => import( /* webpackChunkName: "visits" */ '../views/Consultation/TotalVisits.vue')
                    },
                    {
                        path: '/new-consultation',
                        name: 'new consultation',
                        component: () => import( /* webpackChunkName: "new visit" */ '../views/Consultation/NewConsultation.vue')
                    },
                    {
                        path: '/visit-prescription',
                        name: 'visit prescription',
                        component: () => import( /* webpackChunkName: "visit prescription" */ '../views/Consultation/VisitPrescription.vue')
                    },
                ]
            },
            {
                path: '/add-text',
                name: 'add text',
                component: () => import( /* webpackChunkName: "add text" */ '../views/AddText.vue')
            },
            //for patient
            {
                path: '/patients',
                name: 'patients',
                component: () => import( /* webpackChunkName: "patients" */ '../views/Patients.vue')
            },
            //for doctor
            {
                path: '/doctor-appointment',
                name: 'doctor appointment',
                component: () => import( /* webpackChunkName: "doctor appointment" */ '../views/Doctor/Appointments.vue')
            },
            {
                path: '/doctors',
                name: 'doctors',
                component: () => import( /* webpackChunkName: "doctors" */ '../views/Doctor/Doctors.vue')
            },
            //for pathologist
            {
                path: '/pathologist',
                name: 'pathologist',
                component: () => import( /* webpackChunkName: "pathologist" */ '../views/Lab/Pathologist.vue')
            },
            {
                path: '/laboratory',
                name: 'laboratory',
                component: () => import( /* webpackChunkName: "laboratory" */ '../views/Lab/Laboratory.vue')
            },
            {
                path: '/lab-appointment',
                name: 'lab appointment',
                component: () => import( /* webpackChunkName: "lab appointment" */ '../views/Lab/Appointments.vue')
            },
            {
                path: '/labtest',
                name: 'labtest',
                component: () => import( /* webpackChunkName: "labtest" */ '../views/Lab/Labtest.vue')
            },
            //other
            {
                path: '/specialization',
                name: 'specialization',
                component: () => import( /* webpackChunkName: "specialization" */ '../views/Specialization.vue')
            },
            {
                path: '/hospitals',
                name: 'hospitals',
                component: () => import( /* webpackChunkName: "hospitals" */ '../views/Hospitals.vue')
            },
            {
                path: '/payment-history',
                name: 'payment history',
                component: () => import( /* webpackChunkName: "payment history" */ '../views/PaymentHistory.vue')
            },
            {
                path: '/notes',
                name: 'notes',
                component: () => import( /* webpackChunkName: "notes" */ '../views/Notes.vue')
            },
            {
                path: '/complaints',
                name: 'complaints',
                component: () => import( /* webpackChunkName: "complaints" */ '../views/Complaints.vue')
            },
            {
                path: '/diagnosis',
                name: 'diagnosis',
                component: () => import( /* webpackChunkName: "diagnosis" */ '../views/Diagnosis.vue')
            },
            //Rx Group
            {
                path: '/rx/medicine',
                name: 'rx medicine',
                component: () => import( /* webpackChunkName: "rx medicine" */ '../views/RxGroup/RxLayout.vue')
            },
            {
                path: '/rx/add-medicine',
                name: 'rx add medicine',
                component: () => import( /* webpackChunkName: "rx add medicine" */ '../views/RxGroup/AddMedicine.vue')
            },
            {
                path: '/rx/list',
                name: 'rx list',
                component: () => import( /* webpackChunkName: "rx list" */ '../views/RxGroup/RxList.vue')
            },
            {
                path: '/appointment-service',
                name: 'appointment service',
                component: () => import( /* webpackChunkName: "appointment service" */ '../views/AppointmentService.vue')
            },
            //Clinic
            {
                path: '/clinic-preview',
                name: 'clinic preview',
                component: () => import( /* webpackChunkName: "clinic preview" */ '../views/Clinic/ClinicPreview.vue')
            },
            //Staff
            {
                path: '/staff-layout',
                redirect: '/staff/details',
                name: 'staff layout',
                component: () => import( /* webpackChunkName: "staff layout" */ '../views/Staff/StaffLayout.vue'),
                children: [
                    {
                        path: '/staff/details',
                        name: 'staff details',
                        component: () => import( /* webpackChunkName: "staff details" */ '../views/Staff/Details.vue')
                    },
                    {
                        path: '/staff/permission',
                        name: 'staff permission',
                        component: () => import( /* webpackChunkName: "staff permission" */ '../views/Staff/Permission.vue')
                    },
                    {
                        path: '/staff/slot',
                        name: 'staff slot',
                        component: () => import( /* webpackChunkName: "staff slot" */ '../views/Staff/Slot.vue')
                    },
                ]
            },
            {
                path: '/notification',
                name: 'notification',
                component: () => import( /* webpackChunkName: "notification" */ '../views/Notification/Notification.vue')
            },
            //mob view noti
            {
                path: '/notification/detail',
                name: 'notification detail',
                component: () => import( /* webpackChunkName: "notification detail" */ '../views/Notification/NotificationDetail.vue')
            },
            {
                path: '/not-found',
                name: 'not found',
                component: () => import( /* webpackChunkName: "not found" */ '../views/NotFound.vue')
            },
            //mobile-view
            {
                path: '/prescription/patient',
                name: 'prescription patient',
                component: () => import( /* webpackChunkName: "prescription patient" */ '../views/Prescription/PatientList.vue')
            },
            {
                path: '/medicine-search',
                name: 'medicine search',
                component: () => import( /* webpackChunkName: "medicine search" */ '../views/Medicine/MedicineSearch.vue')
            },
            {
                path: '/staff-list',
                name: 'staff-list',
                component: () => import( /* webpackChunkName: "staff list" */ '../views/Staff/StaffList.vue')
            },
            {
                path: '/rating',
                name: 'rating',
                component: () => import( /* webpackChunkName: "rating" */ '../views/Rating.vue')
            },
            //Policy Pages
            {
                path: '/our-values',
                name: 'our values',
                component: () => import( /* webpackChunkName: "our values" */ '../views/PolicyPages/OurValues.vue')
            },
            {
                path: '/about',
                name: 'about',
                component: () => import( /* webpackChunkName: "about" */ '../views/PolicyPages/AboutUs.vue')
            },
            {
                path: '/faq',
                name: 'faq',
                component: () => import( /* webpackChunkName: "faq" */ '../views/PolicyPages/FAQ.vue')
            },
            {
                path: '/contact',
                name: 'contact',
                component: () => import( /* webpackChunkName: "contact" */ '../views/PolicyPages/Contact.vue')
            },
            {
                path: '/privacy-policy',
                name: 'privacy policy',
                component: () => import( /* webpackChunkName: "privacy policy" */ '../views/PolicyPages/PrivacyPolicy.vue')
            },
            {
                path: '/terms',
                name: 'terms',
                component: () => import( /* webpackChunkName: "terms" */ '../views/PolicyPages/Terms.vue')
            },
            //appointments
            {
                path: '/appointment/calender',
                name: 'appointment calender',
                component: () => import( /* webpackChunkName: "appointment calender" */ '../views/AppointmentCalender.vue')
            },
            {
                path: '/appointment/doctor',
                name: 'appointment doctor',
                component: () => import( /* webpackChunkName: "appointment doctor" */ '../views/Appointment/Doctor.vue')
            },
            {
                path: '/appointment/patient',
                name: 'appointment patient',
                component: () => import( /* webpackChunkName: "appointment patient" */ '../views/Appointment/Patient.vue')
            },
        ]
    },
]



const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      return savedPosition || { top: 0 };
    },
  });

// function scrollBehavior() {
//     window.scrollTo(0, 0);
// }

// router.beforeEach((to, from, next) => {
//     scrollBehavior();
//     next();
// });
export default router
