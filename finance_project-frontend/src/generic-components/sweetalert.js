import Swal from "sweetalert2";

export const sweetalert = (icon, title, text) => {
  return Swal.fire({
    icon: icon,
    title: title,
    text: text,
  });
};
