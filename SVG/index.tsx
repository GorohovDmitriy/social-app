import { FC } from "react";

interface SvgProps {
  id: string;
}

const Svg: FC<SvgProps> = ({ id }) => {
  switch (id) {
    case "comment":
      return (
        <svg
          width="25"
          height="25"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.25 17.4167V4.58333C19.25 3.575 18.425 2.75 17.4167 2.75H4.58333C3.575 2.75 2.75 3.575 2.75 4.58333V17.4167C2.75 18.425 3.575 19.25 4.58333 19.25H17.4167C18.425 19.25 19.25 18.425 19.25 17.4167ZM7.79167 12.375L10.0833 15.1342L13.2917 11L17.4167 16.5H4.58333L7.79167 12.375Z"
            fill="#070928"
            fillOpacity="0.75"
          />
        </svg>
      );
    case "book":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.6849 21L11.8288 16L4.9726 21V5C4.9726 4.46957 5.17898 3.96086 5.54634 3.58579C5.91371 3.21071 6.41197 3 6.9315 3H16.726C17.2456 3 17.7438 3.21071 18.1112 3.58579C18.4785 3.96086 18.6849 4.46957 18.6849 5V21Z"
            fill="white"
          />
        </svg>
      );
    case "work":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.3333 5.50004H14.6667V3.66671C14.6667 2.64921 13.8508 1.83337 12.8333 1.83337H9.16667C8.14917 1.83337 7.33333 2.64921 7.33333 3.66671V5.50004H3.66667C2.64917 5.50004 1.8425 6.31587 1.8425 7.33337L1.83333 17.4167C1.83333 18.4342 2.64917 19.25 3.66667 19.25H18.3333C19.3508 19.25 20.1667 18.4342 20.1667 17.4167V7.33337C20.1667 6.31587 19.3508 5.50004 18.3333 5.50004ZM12.8333 5.50004H9.16667V3.66671H12.8333V5.50004Z"
            fill="white"
          />
        </svg>
      );
    case "art":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.4167 2.75H4.58333C3.575 2.75 2.75 3.575 2.75 4.58333V17.4167C2.75 18.425 3.575 19.25 4.58333 19.25H17.4167C18.425 19.25 19.25 18.425 19.25 17.4167V4.58333C19.25 3.575 18.425 2.75 17.4167 2.75ZM12.8333 15.5833H6.41667V13.75H12.8333V15.5833ZM15.5833 11.9167H6.41667V10.0833H15.5833V11.9167ZM15.5833 8.25H6.41667V6.41667H15.5833V8.25Z"
            fill="white"
          />
        </svg>
      );
    case "search":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
            stroke="#070928"
            strokeOpacity="0.75"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 21L16.65 16.65"
            stroke="#070928"
            strokeOpacity="0.75"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "logo":
      return (
        <svg
          width="48"
          height="45"
          viewBox="0 0 48 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M43.7737 0H3.4889C2.56358 0 1.67617 0.349983 1.02187 0.972955C0.36758 1.59593 0 2.44086 0 3.32188V41.6781C0 42.5591 0.36758 43.4041 1.02187 44.027C1.67617 44.65 2.56358 45 3.4889 45H43.7737C44.699 45 45.5864 44.65 46.2407 44.027C46.895 43.4041 47.2626 42.5591 47.2626 41.6781V3.32188C47.2626 2.44086 46.895 1.59593 46.2407 0.972955C45.5864 0.349983 44.699 0 43.7737 0ZM14.0869 38.3344H6.98108V16.8438H14.0869V38.3344ZM10.5291 13.8656C9.72302 13.8613 8.9364 13.6297 8.26846 13.2002C7.60052 12.7706 7.08119 12.1622 6.77603 11.4519C6.47087 10.7416 6.39354 9.96111 6.5538 9.20898C6.71407 8.45685 7.10475 7.76677 7.67653 7.22584C8.24832 6.68491 8.97558 6.31738 9.76655 6.16961C10.5575 6.02185 11.3767 6.10049 12.1208 6.3956C12.8649 6.69071 13.5004 7.18906 13.9473 7.82777C14.3942 8.46648 14.6323 9.21692 14.6317 9.98438C14.6393 10.4982 14.5382 11.0082 14.3344 11.484C14.1305 11.9598 13.8282 12.3917 13.4454 12.7539C13.0625 13.1161 12.607 13.4012 12.106 13.5922C11.6049 13.7832 11.0686 13.8762 10.5291 13.8656ZM40.2782 38.3531H33.1757V26.6125C33.1757 23.15 31.6298 22.0813 29.6343 22.0813C27.5272 22.0813 25.4594 23.5938 25.4594 26.7V38.3531H18.3536V16.8594H25.187V19.8375H25.2789C25.9649 18.5156 28.3674 16.2563 32.0335 16.2563C35.9983 16.2563 40.2815 18.4969 40.2815 25.0594L40.2782 38.3531Z"
            fill="#0A66C2"
          />
        </svg>
      );
    case "home":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5492 2.53318C11.3872 1.82618 12.6128 1.82618 13.4508 2.53318L20.2008 8.22772C20.7076 8.65523 21 9.28447 21 9.94747V19.7504C21 20.7169 20.2165 21.5004 19.25 21.5004H16.25C15.2835 21.5004 14.5 20.7169 14.5 19.7504V14.7504C14.5 14.3362 14.1642 14.0004 13.75 14.0004H10.25C9.83579 14.0004 9.5 14.3362 9.5 14.7504V19.7504C9.5 20.7169 8.7165 21.5004 7.75 21.5004H4.75C3.7835 21.5004 3 20.7169 3 19.7504V9.94747C3 9.28447 3.29241 8.65523 3.79916 8.22772L10.5492 2.53318Z"
            fill="#F8F8FA"
          />
        </svg>
      );
    case "users":
      return (
        <svg
          width="22"
          height="21"
          viewBox="0 0 22 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.42857 11.7143L11.8571 11.7151C12.7604 11.7151 13.5012 12.4141 13.5667 13.3014L13.5714 13.4294V15.5714C13.5706 19.1714 9.89686 20.2857 7.14286 20.2857C4.44394 20.2857 0.860901 19.2156 0.718658 15.7844L0.714287 15.5714V13.4286C0.714287 12.5253 1.41406 11.7845 2.3007 11.719L2.42857 11.7143ZM13.76 11.7151L19.5714 11.7143C20.4747 11.7143 21.2155 12.414 21.281 13.3007L21.2857 13.4286V15.1428C21.2849 18.3648 18.3457 19.4286 16.1429 19.4286C15.236 19.4286 14.2066 19.2443 13.3066 18.8071C13.9514 18.0408 14.3699 17.0652 14.4229 15.8382L14.4286 15.5714V13.4294C14.4286 12.8279 14.2153 12.2802 13.8681 11.8429L13.76 11.7151L19.5714 11.7143L13.76 11.7151ZM7.14286 0.571411C9.746 0.571411 11.8571 2.68255 11.8571 5.2857C11.8571 7.88884 9.746 9.99998 7.14286 9.99998C4.53971 9.99998 2.42857 7.88884 2.42857 5.2857C2.42857 2.68255 4.53971 0.571411 7.14286 0.571411ZM16.5714 2.2857C18.7014 2.2857 20.4286 4.01284 20.4286 6.14284C20.4286 8.27284 18.7014 9.99998 16.5714 9.99998C14.4414 9.99998 12.7143 8.27284 12.7143 6.14284C12.7143 4.01284 14.4414 2.2857 16.5714 2.2857Z"
            fill="white"
          />
        </svg>
      );
    case "message":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.61113e-05 10C1.61113e-05 4.47716 4.47718 0 10 0C15.5229 0 20 4.47716 20 10C20 15.5228 15.5229 20 10 20C8.25466 20 6.61136 19.552 5.18148 18.7644L1.29118 19.9484C0.937876 20.056 0.554056 19.96 0.292916 19.6988C0.0317762 19.4378 -0.0641819 19.0538 0.0433561 18.7006L1.22868 14.8059C0.445356 13.379 1.61113e-05 11.7402 1.61113e-05 10ZM6 9C6 9.55228 6.44772 10 7 10H13C13.5523 10 14 9.55228 14 9C14 8.44772 13.5523 8 13 8H7C6.44772 8 6 8.44772 6 9ZM7 12C6.44772 12 6 12.4477 6 13C6 13.5523 6.44772 14 7 14H11C11.5523 14 12 13.5523 12 13C12 12.4477 11.5523 12 11 12H7Z"
            fill="white"
          />
        </svg>
      );
    case "edit":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 16.5C13.3018 16.5 14.3571 17.5553 14.3571 18.8572C14.3571 20.159 13.3018 21.2143 12 21.2143C10.6982 21.2143 9.64285 20.159 9.64285 18.8572C9.64285 17.5553 10.6982 16.5 12 16.5Z"
            fill="#212121"
          />
          <path
            d="M12 9.64286C13.3018 9.64286 14.3571 10.6982 14.3571 12C14.3571 13.3018 13.3018 14.3571 12 14.3571C10.6982 14.3571 9.64285 13.3018 9.64285 12C9.64285 10.6982 10.6982 9.64286 12 9.64286Z"
            fill="#212121"
          />
          <path
            d="M14.3571 5.14286C14.3571 3.84103 13.3018 2.78571 12 2.78571C10.6982 2.78571 9.64285 3.84103 9.64285 5.14286C9.64285 6.44469 10.6982 7.5 12 7.5C13.3018 7.5 14.3571 6.44469 14.3571 5.14286Z"
            fill="#212121"
          />
        </svg>
      );
    case "send":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.58543 1.57918C2.32923 1.45108 2.02242 1.4801 1.79478 1.65397C1.56714 1.82785 1.45841 2.1162 1.51459 2.39709L3.6189 9.67165C3.69906 9.94873 3.931 10.1553 4.21548 10.2029L12.75 11.6323C13.152 11.7127 13.152 12.2873 12.75 12.3677L4.21548 13.797C3.931 13.8447 3.69906 14.0512 3.6189 14.3283L1.51459 21.6028C1.45841 21.8838 1.56714 22.1721 1.79478 22.3461C2.02242 22.5199 2.32923 22.5489 2.58543 22.4208L22.0854 12.6708C22.3395 12.5438 22.5 12.2841 22.5 12C22.5 11.7159 22.3395 11.4562 22.0854 11.3292L2.58543 1.57918Z"
            fill="#070928"
            fillOpacity="0.75"
          />
        </svg>
      );
    case "add-image":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
            stroke="#fff"
            strokeOpacity="0.75"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z"
            stroke="#fff"
            strokeOpacity="0.75"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 15L16 10L5 21"
            stroke="#fff"
            strokeOpacity="0.75"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "like":
      return (
        <svg
          width="19"
          height="22"
          viewBox="0 0 19 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.0566 8.0041C13.5174 6.57708 13.75 5.32791 13.75 4.25083C13.75 1.85216 12.811 0.00342178 11.25 0.00342178C10.4033 0.00342178 10.1412 0.507662 9.8133 1.75024C9.8304 1.68531 9.6504 2.3842 9.5977 2.57145C9.4968 2.93019 9.321 3.54094 9.0707 4.40246C9.064 4.42554 9.0542 4.44729 9.0413 4.46737L6.17457 8.95303C5.49652 10.014 4.49605 10.8295 3.32017 11.2797L2.06293 11.761C1.26956 12.0648 0.808941 12.8945 0.970661 13.7285L1.65682 17.2672C1.82396 18.1291 2.47726 18.8151 3.33006 19.0242L11.5796 21.0461C14.1108 21.6665 16.6692 20.1316 17.3131 17.6062L18.8869 11.4335C19.2622 9.9618 18.3733 8.4646 16.9016 8.08935C16.6796 8.03274 16.4513 8.0041 16.2222 8.0041H13.0566Z"
            fill="#070928"
            fillOpacity="0.75"
          />
        </svg>
      );
    case "msg":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.61113e-05 10C1.61113e-05 4.47716 4.47718 0 10 0C15.5229 0 20 4.47716 20 10C20 15.5228 15.5229 20 10 20C8.25466 20 6.61136 19.552 5.18148 18.7644L1.29118 19.9484C0.937876 20.056 0.554056 19.96 0.292916 19.6988C0.0317762 19.4378 -0.0641819 19.0538 0.0433561 18.7006L1.22868 14.8059C0.445356 13.379 1.61113e-05 11.7402 1.61113e-05 10ZM6 9C6 9.55228 6.44772 10 7 10H13C13.5523 10 14 9.55228 14 9C14 8.44772 13.5523 8 13 8H7C6.44772 8 6 8.44772 6 9ZM7 12C6.44772 12 6 12.4477 6 13C6 13.5523 6.44772 14 7 14H11C11.5523 14 12 13.5523 12 13C12 12.4477 11.5523 12 11 12H7Z"
            fill="#070928"
            fillOpacity="0.75"
          />
        </svg>
      );
    case "save":
      return (
        <svg
          width="14"
          height="18"
          viewBox="0 0 14 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 18L7 13L0 18V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H12C12.5304 0 13.0391 0.210714 13.4142 0.585786C13.7893 0.960859 14 1.46957 14 2V18Z"
            fill="#070928"
            fillOpacity="0.75"
          />
        </svg>
      );
    case "share":
      return (
        <svg
          width="21"
          height="22"
          viewBox="0 0 21 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.2857 11C18.126 11 20.4286 8.69746 20.4286 5.85714C20.4286 3.01682 18.126 0.714287 15.2857 0.714287C12.4454 0.714287 10.1429 3.01682 10.1429 5.85714C10.1429 6.68643 10.3391 7.46987 10.6877 8.16354L7.80902 10.1883C7.12145 9.12912 5.92825 8.42857 4.57142 8.42857C2.44118 8.42857 0.714279 10.1555 0.714279 12.2857C0.714279 14.416 2.44118 16.1429 4.57142 16.1429C5.77243 16.1429 6.84524 15.5939 7.55265 14.7333L12.0112 17.3341C11.9113 17.6331 11.8571 17.9531 11.8571 18.2857C11.8571 19.9426 13.2003 21.2857 14.8571 21.2857C16.514 21.2857 17.8571 19.9426 17.8571 18.2857C17.8571 16.6289 16.514 15.2857 14.8571 15.2857C13.9955 15.2857 13.2186 15.649 12.6714 16.2308L8.19234 13.618C8.34517 13.2028 8.42857 12.754 8.42857 12.2857C8.42857 11.9798 8.39291 11.6822 8.32562 11.3969L11.4044 9.23137C12.3473 10.315 13.7365 11 15.2857 11Z"
            fill="#070928"
            fillOpacity="0.75"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default Svg;