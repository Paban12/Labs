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
                path: '/forgot',
                name: 'forgot',
                component: () => import( /* webpackChunkName: "forgot" */ '../views/auth/Forgot.vue')
            },
        ]
    },

    {
        path: '/',
        redirect: '/appointment/calender',
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
            //for patients
            {
                path: '/patient',
                redirect: '/patient/profile',
                name: 'patient profile',
                component: () => import( /* webpackChunkName: "patient layout" */ '../views/Patient/ProfileLayout.vue'),
                children: [
                    {
                        path: '/patient/profile',
                        name: 'patient profile',
                        component: () => import( /* webpackChunkName: "patient profile" */ '../views/Patient/Profile.vue')
                    },
                    {
                        path: '/patient/edit',
                        name: 'patient edit',
                        component: () => import( /* webpackChunkName: "patient edit" */ '../views/Patient/Edit.vue')
                    },
                    {
                        path: '/patient/bills',
                        name: 'patient bills',
                        component: () => import( /* webpackChunkName: "patient bills" */ '../views/Patient/Bills.vue')
                    },
                    {
                        path: '/patient/visits',
                        name: 'patient visits',
                        component: () => import( /* webpackChunkName: "patient visits" */ '../views/Patient/Visits.vue')
                    },
                    {
                        path: '/patient/appointment',
                        name: 'patient appointment',
                        component: () => import( /* webpackChunkName: "patient appointment" */ '../views/Patient/Appointments.vue')
                    },
                    {
                        path: '/patient/lab-report',
                        name: 'patient lab report',
                        component: () => import( /* webpackChunkName: "patient lab report" */ '../views/Patient/LabReport.vue')
                    },
                ]
            },
            {
                path: '/patients',
                name: 'patients',
                component: () => import( /* webpackChunkName: "patients" */ '../views/Patient/Patients.vue')
            },
            //prescription
            {
                path: '/prescription',
                name: 'prescription',
                component: () => import( /* webpackChunkName: "prescription" */ '../views/Prescription/Prescription.vue')
            },
            {
                path: '/lab-prescription',
                name: 'Lab prescription',
                component: () => import( /* webpackChunkName: "prescription" */ '../views/Prescription/LabPrescription.vue')
            },
            {
                path: '/doctor-prescription',
                name: 'Doctor prescription',
                component: () => import( /* webpackChunkName: "prescription" */ '../views/Prescription/DoctorPrescription.vue')
            },
            {
                path: '/hospital-prescription',
                name: 'Hospital prescription',
                component: () => import( /* webpackChunkName: "prescription" */ '../views/Prescription/HospitalPrescription.vue')
            },
            
            {
                path: '/add-text',
                name: 'add text',
                component: () => import( /* webpackChunkName: "add text" */ '../views/AddText.vue')
            },
            //for patient
            // {
            //     path: '/patients',
            //     name: 'patients',
            //     component: () => import( /* webpackChunkName: "patients" */ '../views/Patient/Patients.vue')
            // },
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
            {
                path: '/doctor/profile',
                name: 'doctor profile',
                component: () => import( /* webpackChunkName: "doctor profile" */ '../views/Doctor/Profile.vue')
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
            //visits
            {
                path: '/visits',
                name: 'visits',
                component: () => import( /* webpackChunkName: "visits" */ '../views/Visits/Visits.vue')
            },
            {
                path: '/visit-summary',
                name: 'visit summary',
                component: () => import( /* webpackChunkName: "visit summary" */ '../views/Visits/VisitSummary.vue')
            },
            //other
            {
                path: '/payment-history',
                name: 'payment history',
                component: () => import( /* webpackChunkName: "payment history" */ '../views/PaymentHistory.vue')
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
                redirect: '/staff-details',
                name: 'staff layout',
                component: () => import( /* webpackChunkName: "staff layout" */ '../views/Staff/StaffLayout.vue'),
                children: [
                    {
                        path: '/staff-details',
                        redirect: '/staff/details',
                        name: 'staff details layout',
                        component: () => import( /* webpackChunkName: "staff details layout" */ '../views/Staff/StaffDetailsLayout.vue'),
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
                        path: '/staff-add',
                        name: 'staff add',
                        component: () => import( /* webpackChunkName: "staff add" */ '../views/Staff/StaffAdd.vue')
                    },
                ]
            },
            // staff mob view
            {
                path: '/staff',
                name: 'staff',
                component: () => import( /* webpackChunkName: "staff" */ '../views/Staff/StaffList.vue')
            },
            {
                path: '/not-found',
                name: 'not found',
                component: () => import( /* webpackChunkName: "not found" */ '../views/NotFound.vue')
            },
            //Billing
            {
                path: '/billing',
                name: 'billing',
                component: () => import( /* webpackChunkName: "billing" */ '../views/Billing.vue')
            },
            //Settings
            {
                path: '/site-setting',
                name: 'site setting',
                component: () => import( /* webpackChunkName: "site setting" */ '../views/Settings/SiteSetting.vue')
            },
            {
                path: '/practice-details',
                name: 'practice details',
                component: () => import( /* webpackChunkName: "practice details" */ '../views/Settings/PracticeDetails.vue')
            },
            {
                path: '/thyromax-plan',
                name: 'thyromax plan',
                component: () => import( /* webpackChunkName: "thyromax plan" */ '../views/Settings/ThyromaxPlan.vue')
            },
            {
                path: '/department',
                name: 'department',
                component: () => import( /* webpackChunkName: "department" */ '../views/Settings/Department.vue')
            },
            {
                path: '/login-access',
                name: 'login access',
                component: () => import( /* webpackChunkName: "login access" */ '../views/Settings/LoginAccess.vue')
            },
            {
                path: '/calender-setting',
                name: 'calender setting',
                component: () => import( /* webpackChunkName: "calender setting" */ '../views/Settings/Calender.vue')
            },
            {
                path: '/patient-record',
                name: 'patient-record',
                component: () => import( /* webpackChunkName: "patient record" */ '../views/Settings/PatientRecord.vue')
            },
            {
                path: '/patient-group',
                name: 'patient-group',
                component: () => import( /* webpackChunkName: "patient group" */ '../views/Settings/PatientGroups.vue')
            },
            {
                path: '/expense',
                name: 'expense',
                component: () => import( /* webpackChunkName: "expense" */ '../views/Expense.vue')
            },
            {
                path: '/faq-create',
                name: 'faq create',
                component: () => import( /* webpackChunkName: "faq create" */ '../views/PolicyPages/FAQCreate.vue')
            },
            {
                path: '/feedback',
                name: 'feedback',
                component: () => import( /* webpackChunkName: "feedback" */ '../views/Feedback.vue')
            },
            //Reference Share Layout
            {
                path: '/ref-share-layout',
                redirect: '/reference-lab-doctor',
                name: 'ref share layout',
                component: () => import( /* webpackChunkName: "ref share layout" */ '../views/ReferenceSharing/RefShareLayout.vue'),
                children: [
                    {
                        path: '/reference-lab-doctor',
                        name: 'reference lab doctor',
                        component: () => import( /* webpackChunkName: "reference lab doctor" */ '../views/ReferenceSharing/RefLabDoctor.vue')
                    },
                    {
                        path: '/reference-lab-to',
                        name: 'reference lab to',
                        component: () => import( /* webpackChunkName: "reference lab to" */ '../views/ReferenceSharing/RefLabTo.vue')
                    },
                    {
                        path: '/reference-lab-by',
                        name: 'reference lab by',
                        component: () => import( /* webpackChunkName: "reference lab by" */ '../views/ReferenceSharing/RefLabBy.vue')
                    },
                    {
                        path: '/reference-lab-master',
                        name: 'reference lab master',
                        component: () => import( /* webpackChunkName: "reference lab master" */ '../views/ReferenceSharing/RefLabMaster.vue')
                    },
                    {
                        path: '/phlebo-sharing',
                        name: 'phlebo sharing',
                        component: () => import( /* webpackChunkName: "pheblo sharing" */ '../views/ReferenceSharing/PhleboSharing.vue')
                    },
                ]
            },
            //mobile-view
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
            //for mob view
            {
                path: '/appointment/patient',
                name: 'appointment patient',
                component: () => import( /* webpackChunkName: "appointment patient" */ '../views/Appointment/Patient.vue')
            },
            {
                path: '/appointment/overview',
                name: 'appointment overview',
                component: () => import( /* webpackChunkName: "appointment overview" */ '../views/Appointment/Overview.vue')
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
