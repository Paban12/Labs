import { defineAsyncComponent } from 'vue'

// components
const DashNavbar = defineAsyncComponent(() => import('../components/DashNavbar.vue'))
const Footer = defineAsyncComponent(() => import('../components/Footer.vue'))
const SingleSelect = defineAsyncComponent(() => import('../components/Dropdown/SingleSelect.vue'))
const Select = defineAsyncComponent(() => import('../components/Dropdown/Select.vue'))
const MultiSelect = defineAsyncComponent(() => import('../components/Dropdown/MultiSelect.vue'))
const Loader = defineAsyncComponent(() => import('../components/Loader.vue'))
const Modal = defineAsyncComponent(() => import('../components/Modal.vue'))
const Alert = defineAsyncComponent(() => import('../components/Alert.vue'))
const PdfDownload = defineAsyncComponent(() => import('../components/PdfDownload.vue'))
const EventCalender = defineAsyncComponent(() => import('../components/EventCalender.vue'))
const AptSuccessModal = defineAsyncComponent(() => import('../components/Modals/AptSuccessModal.vue'))
const AptBookModal = defineAsyncComponent(() => import('../components/Modals/AptBookModal.vue'))
// const  = defineAsyncComponent(() => import('../components/.vue'))

//Lab Test
const AddTestModal = defineAsyncComponent(() => import('../components/Labtest/AddTestModal.vue'))
const AddPanelModal = defineAsyncComponent(() => import('../components/Labtest/AddPanelModal.vue'))
const AddPackageModal = defineAsyncComponent(() => import('../components/Labtest/AddPackageModal.vue'))
const AddTemplateModal = defineAsyncComponent(() => import('../components/Labtest/AddTemplateModal.vue'))

//Doctor Profile
const DoctorProfile = defineAsyncComponent(() => import('../components/DoctorProfile/Profile.vue'))
const DoctorEducation = defineAsyncComponent(() => import('../components/DoctorProfile/Education.vue'))
const DoctorExpertise = defineAsyncComponent(() => import('../components/DoctorProfile/Expertise.vue'))
const DoctorLanguage = defineAsyncComponent(() => import('../components/DoctorProfile/Language.vue'))
const DoctorFees = defineAsyncComponent(() => import('../components/DoctorProfile/Fees.vue'))
const DoctorSign = defineAsyncComponent(() => import('../components/DoctorProfile/Sign.vue'))
const DoctorBlock = defineAsyncComponent(() => import('../components/DoctorProfile/Block.vue'))
const DoctorSchedule = defineAsyncComponent(() => import('../components/DoctorProfile/Schedule.vue'))

//Billing
const BillingTax = defineAsyncComponent(() => import('../components/Billing/Tax.vue'))
const BillingPayMode = defineAsyncComponent(() => import('../components/Billing/PayModes.vue'))
const BillingExpense = defineAsyncComponent(() => import('../components/Billing/Expense.vue'))
const BillingIntegration = defineAsyncComponent(() => import('../components/Billing/Integration.vue'))
const BillingSetting = defineAsyncComponent(() => import('../components/Billing/Setting.vue'))

//Reference Sharing
//Ref Lab Doctor
const RefLabDoctorBilling = defineAsyncComponent(() => import('../components/ReferenceSharing/RefLabDoctor/Billing.vue'))
const RefLabDoctorTest = defineAsyncComponent(() => import('../components/ReferenceSharing/RefLabDoctor/Test.vue'))
const RefLabDoctorSharing = defineAsyncComponent(() => import('../components/ReferenceSharing/RefLabDoctor/Sharing.vue'))
const RefLabDoctorSetting = defineAsyncComponent(() => import('../components/ReferenceSharing/RefLabDoctor/Setting.vue'))
//Ref Lab To
const RefLabToBilling = defineAsyncComponent(() => import('../components/ReferenceSharing/RefLabTo/Billing.vue'))
const RefLabToTest = defineAsyncComponent(() => import('../components/ReferenceSharing/RefLabTo/Test.vue'))
//Ref Lab To
const RefLabByBilling = defineAsyncComponent(() => import('../components/ReferenceSharing/RefLabBy/Billing.vue'))
const RefLabByTest = defineAsyncComponent(() => import('../components/ReferenceSharing/RefLabBy/Test.vue'))
//Pheblo Sharing
const PhleboBilling = defineAsyncComponent(() => import('../components/ReferenceSharing/Phlebo/Billing.vue'))
const PhleboSharing = defineAsyncComponent(() => import('../components/ReferenceSharing/Phlebo/Sharing.vue'))
const PhleboSetting = defineAsyncComponent(() => import('../components/ReferenceSharing/Phlebo/Setting.vue'))

//Patient Groups
const PatientGroup = defineAsyncComponent(() => import('../components/PatientGroup/PatientGroup.vue'))
const PatientMaster = defineAsyncComponent(() => import('../components/PatientGroup/PatientMaster.vue'))

//Reports
const PatientReport = defineAsyncComponent(() => import('../components/Reports/Patients.vue'))

//icons
const RightArrowIcon = defineAsyncComponent(() => import('../components/icons/right-arrow-svg.vue'))
const LoginLoaderIcon = defineAsyncComponent(() => import('../components/icons/login-loader-svg.vue'))
const CalenderIcon = defineAsyncComponent(() => import('../components/icons/calender-svg.vue'))
const CrossIcon = defineAsyncComponent(() => import('../components/icons/cross-svg.vue'))
const SearchIcon = defineAsyncComponent(() => import('../components/icons/search-svg.vue'))
const MailIcon = defineAsyncComponent(() => import('../components/icons/mail-svg.vue'))
const LocationIcon = defineAsyncComponent(() => import('../components/icons/location-svg.vue'))
const PhoneIcon = defineAsyncComponent(() => import('../components/icons/phone-svg.vue'))
const SuccessIcon = defineAsyncComponent(() => import('../components/icons/success-svg.vue'))
const WarningIcon = defineAsyncComponent(() => import('../components/icons/warning-svg.vue'))
const MenuIcon = defineAsyncComponent(() => import('../components/icons/menu-svg.vue'))
const DoubleArrowIcon = defineAsyncComponent(() => import('../components/icons/double-arrow-svg.vue'))
const PadIcon = defineAsyncComponent(() => import('../components/icons/pad-svg.vue'))
const DoctorIcon2 = defineAsyncComponent(() => import('../components/icons/doctor2-svg.vue'))
const DoctorIcon = defineAsyncComponent(() => import('../components/icons/doctor-svg.vue'))
const NurseIcon = defineAsyncComponent(() => import('../components/icons/nurse-svg.vue'))
const HospitalIcon = defineAsyncComponent(() => import('../components/icons/hospital-svg.vue'))
const RightDoubleArrowIcon = defineAsyncComponent(() => import('../components/icons/right-double-arrow-svg.vue'))
const LeftDoubleArrowIcon = defineAsyncComponent(() => import('../components/icons/left-double-arrow-svg.vue'))
const RightArrowRoundIcon = defineAsyncComponent(() => import('../components/icons/right-arrow-round-svg.vue'))
const LeftArrowRoundIcon = defineAsyncComponent(() => import('../components/icons/left-arrow-round-svg.vue'))
const DownArrowRoundIcon = defineAsyncComponent(() => import('../components/icons/down-arrow-round-svg.vue'))
const MessageIcon = defineAsyncComponent(() => import('../components/icons/message-svg.vue'))
const UserIcon = defineAsyncComponent(() => import('../components/icons/user-svg.vue'))
const TwitterIcon = defineAsyncComponent(() => import('../components/icons/twitter-svg.vue'))
const InstagramIcon = defineAsyncComponent(() => import('../components/icons/instagram-svg.vue'))
const FacebookIcon = defineAsyncComponent(() => import('../components/icons/facebook-svg.vue'))
const GoogleIcon = defineAsyncComponent(() => import('../components/icons/google-svg.vue'))
const LinkedinIcon = defineAsyncComponent(() => import('../components/icons/linkedin-svg.vue'))
const TelegramIcon = defineAsyncComponent(() => import('../components/icons/telegram-svg.vue'))
const StarIcon = defineAsyncComponent(() => import('../components/icons/star-svg.vue'))
const QuoteIcon = defineAsyncComponent(() => import('../components/icons/quote-svg.vue'))
const LoginIcon = defineAsyncComponent(() => import('../components/icons/login-svg.vue'))
const Notification = defineAsyncComponent(() => import('../components/Notification.vue'));
const NotificationList = defineAsyncComponent(() => import('../components/NotificationList.vue'));
const NotificationMessage = defineAsyncComponent(() => import('../components/NotificationMessage.vue'));
const spinner = defineAsyncComponent(() => import('../components/Spinner.vue'));
const MobileIcon = defineAsyncComponent(() => import('../components/icons/mobile-svg.vue'))
const LeftArrowIcon = defineAsyncComponent(() => import('../components/icons/left-arrow-svg.vue'))
const NoteIcon = defineAsyncComponent(() => import('../components/icons/note-svg.vue'))
const AddIcon = defineAsyncComponent(() => import('../components/icons/add-svg.vue'))
const DeleteIcon = defineAsyncComponent(() => import('../components/icons/delete-svg.vue'))
const EditIcon = defineAsyncComponent(() => import('../components/icons/edit-svg.vue'))
const VertDotsIcon = defineAsyncComponent(() => import('../components/icons/vert-dots-svg.vue'))
const AddUserIcon = defineAsyncComponent(() => import('../components/icons/add-user-svg.vue'))
const DashboardIcon = defineAsyncComponent(() => import('../components/icons/dashboard-svg.vue'))
const PatientIcon = defineAsyncComponent(() => import('../components/icons/patient-svg.vue'))
const StaffIcon = defineAsyncComponent(() => import('../components/icons/staff-svg.vue'))
const LabIcon = defineAsyncComponent(() => import('../components/icons/lab-svg.vue'))
const HelpIcon = defineAsyncComponent(() => import('../components/icons/help-svg.vue'))
const FeedbackIcon = defineAsyncComponent(() => import('../components/icons/feedback-svg.vue'))
const SettingIcon = defineAsyncComponent(() => import('../components/icons/setting-svg.vue'))
const ReportIcon = defineAsyncComponent(() => import('../components/icons/report-svg.vue'))
const ShareIcon = defineAsyncComponent(() => import('../components/icons/share-svg.vue'))
const VisitIcon = defineAsyncComponent(() => import('../components/icons/visit-svg.vue'))
const PrescriptionIcon = defineAsyncComponent(() => import('../components/icons/prescription-svg.vue'))
const MoneyIcon = defineAsyncComponent(() => import('../components/icons/money-svg.vue'))
// const Icon = defineAsyncComponent(() => import('../components/icons/-svg.vue'))

const GlobalComponents = {
  install (app) {
    app.component('DashNavbar', DashNavbar)
    app.component('Footer', Footer)
    app.component('SingleSelect', SingleSelect)
    app.component('Select', Select)
    app.component('MultiSelect', MultiSelect)
    app.component('Loader', Loader)
    app.component('Modal', Modal)
    app.component('Alert', Alert)
    app.component('download-button', PdfDownload)
    app.component('EventCalender', EventCalender)
    app.component('AptSuccessModal', AptSuccessModal)
    app.component('AptBookModal', AptBookModal)
    // app.component('', )

    //Lab Test
    app.component('AddTestModal', AddTestModal)
    app.component('AddPanelModal', AddPanelModal)
    app.component('AddPackageModal', AddPackageModal)
    app.component('AddTemplateModal', AddTemplateModal)

    //Doctor Profile
    app.component('DoctorProfile', DoctorProfile)
    app.component('DoctorEducation', DoctorEducation)
    app.component('DoctorExpertise', DoctorExpertise)
    app.component('DoctorLanguage', DoctorLanguage)
    app.component('DoctorFees', DoctorFees)
    app.component('DoctorSign', DoctorSign)
    app.component('DoctorBlock', DoctorBlock)
    app.component('DoctorSchedule', DoctorSchedule)

    //Billing
    app.component('BillingTax', BillingTax)
    app.component('BillingPayMode', BillingPayMode)
    app.component('BillingExpense', BillingExpense)
    app.component('BillingIntegration', BillingIntegration)
    app.component('BillingSetting', BillingSetting)

    //Reference Sharing
    //Ref Lab Doctor
    app.component('RefLabDoctorBilling', RefLabDoctorBilling)
    app.component('RefLabDoctorTest', RefLabDoctorTest)
    app.component('RefLabDoctorSharing', RefLabDoctorSharing)
    app.component('RefLabDoctorSetting', RefLabDoctorSetting)
    //Ref Lab To
    app.component('RefLabToBilling', RefLabToBilling)
    app.component('RefLabToTest', RefLabToTest)
    //Ref Lab By
    app.component('RefLabByBilling', RefLabByBilling)
    app.component('RefLabByTest', RefLabByTest)
    //Pheblo Sharing
    app.component('PhleboBilling', PhleboBilling)
    app.component('PhleboSharing', PhleboSharing)
    app.component('PhleboSetting', PhleboSetting)

    //Patient Group
    app.component('PatientGroup', PatientGroup)
    app.component('PatientMaster', PatientMaster)

    //Reports
    app.component('PatientReport', PatientReport)
    
    // icons
    app.component('icon-right-arrow', RightArrowIcon)
    app.component('icon-login-loader', LoginLoaderIcon)
    app.component('icon-calender', CalenderIcon)
    app.component('icon-cross', CrossIcon)
    app.component('icon-search', SearchIcon)
    app.component('icon-mail', MailIcon)
    app.component('icon-location', LocationIcon)
    app.component('icon-phone', PhoneIcon)
    app.component('icon-success', SuccessIcon)
    app.component('icon-warning', WarningIcon)
    app.component('icon-menu', MenuIcon)
    app.component('icon-double-arrow', DoubleArrowIcon)
    app.component('icon-pad', PadIcon)
    app.component('icon-doctor', DoctorIcon)
    app.component('icon-doctor2', DoctorIcon2)
    app.component('icon-nurse', NurseIcon)
    app.component('icon-hospital', HospitalIcon)
    app.component('icon-right-double-arrow', RightDoubleArrowIcon)
    app.component('icon-left-double-arrow', LeftDoubleArrowIcon)
    app.component('icon-right-arrow-round', RightArrowRoundIcon)
    app.component('icon-left-arrow-round', LeftArrowRoundIcon)
    app.component('icon-down-arrow-round', DownArrowRoundIcon)
    app.component('icon-message', MessageIcon)
    app.component('icon-user', UserIcon)
    app.component('icon-twitter', TwitterIcon)
    app.component('icon-instagram', InstagramIcon)
    app.component('icon-facebook', FacebookIcon)
    app.component('icon-google', GoogleIcon)
    app.component('icon-linkedin', LinkedinIcon)
    app.component('icon-telegram', TelegramIcon)
    app.component('icon-star', StarIcon)
    app.component('icon-quote', QuoteIcon)
    app.component('icon-login', LoginIcon)
    app.component('Notification', Notification)
		app.component('Notification-list', NotificationList)
		app.component('Notification-message', NotificationMessage)
    app.component('base-spinner', spinner);
    app.component('icon-mobile', MobileIcon)
    app.component('icon-left-arrow', LeftArrowIcon)
    app.component('icon-note', NoteIcon)
    app.component('icon-add', AddIcon)
    app.component('icon-delete', DeleteIcon)
    app.component('icon-edit', EditIcon)
    app.component('icon-vert-dots', VertDotsIcon)
    app.component('icon-add-user', AddUserIcon)
    app.component('icon-dashboard', DashboardIcon)
    app.component('icon-patient', PatientIcon)
    app.component('icon-staff', StaffIcon)
    app.component('icon-lab', LabIcon)
    app.component('icon-share', ShareIcon)
    app.component('icon-feedback', FeedbackIcon)
    app.component('icon-help', HelpIcon)
    app.component('icon-prescription', PrescriptionIcon)
    app.component('icon-setting', SettingIcon)
    app.component('icon-report', ReportIcon)
    app.component('icon-visit', VisitIcon)
    app.component('icon-money', MoneyIcon)
    // app.component('icon-', Icon)
    // app.component('icon-', Icon)
    // app.component('icon-', Icon)
  }
}

export default GlobalComponents
