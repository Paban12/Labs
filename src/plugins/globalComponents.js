import { defineAsyncComponent } from 'vue'

// components
const DashNavbar = defineAsyncComponent(() => import('../components/DashNavbar.vue'))
const Footer = defineAsyncComponent(() => import('../components/Footer.vue'))
const SingleSelect = defineAsyncComponent(() => import('../components/Dropdown/SingleSelect.vue'))
const MultiSelect = defineAsyncComponent(() => import('../components/Dropdown/MultiSelect.vue'))
const Loader = defineAsyncComponent(() => import('../components/Loader.vue'))
const Modal = defineAsyncComponent(() => import('../components/Modal.vue'))
const Alert = defineAsyncComponent(() => import('../components/Alert.vue'))
const EventCalender = defineAsyncComponent(() => import('../components/EventCalender.vue'))
const Popup = defineAsyncComponent(() => import('../components/Popup.vue'))
// const  = defineAsyncComponent(() => import('../components/.vue'))

//Lab Test
const AddTestModal = defineAsyncComponent(() => import('../components/Labtest/AddTestModal.vue'))

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
const DoctorIcon = defineAsyncComponent(() => import('../components/icons/doctor-svg.vue'))
const NurseIcon = defineAsyncComponent(() => import('../components/icons/nurse-svg.vue'))
const HospitalIcon = defineAsyncComponent(() => import('../components/icons/hospital-svg.vue'))
const RightArrowRoundIcon = defineAsyncComponent(() => import('../components/icons/right-arrow-round-svg.vue'))
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
// const Icon = defineAsyncComponent(() => import('../components/icons/-svg.vue'))

const GlobalComponents = {
  install (app) {
    app.component('DashNavbar', DashNavbar)
    app.component('Footer', Footer)
    app.component('SingleSelect', SingleSelect)
    app.component('MultiSelect', MultiSelect)
    app.component('Loader', Loader)
    app.component('Modal', Modal)
    app.component('Alert', Alert)
    app.component('EventCalender', EventCalender)
    app.component('Popup', Popup)
    // app.component('', )

    //Lab Test
    app.component('AddTestModal', AddTestModal)
    
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
    app.component('icon-nurse', NurseIcon)
    app.component('icon-hospital', HospitalIcon)
    app.component('icon-right-arrow-round', RightArrowRoundIcon)
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
    // app.component('icon-', Icon)
  }
}

export default GlobalComponents
