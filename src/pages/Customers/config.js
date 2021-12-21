import { Switch } from "@headlessui/react";
import * as yup from "yup";

export const useColumns = ({ handleToggleStatus }) => {
  return [
    { field: "nama", headerName: "Nama Lengkap", sortable: true },
    { field: "noHp", headerName: "Nomor HP", sortable: true },
    { field: "email", headerName: "Email", sortable: true },
    { field: "gender", headerName: "Jenis Kelamin", sortable: true },
    { field: "tglLahir", headerName: "Tanggal Lahir", sortable: true },
    { field: "kota", headerName: "Kota", sortable: true },
    {
      field: "status",
      headerName: "Status",
      formatter: (value, item) => {
        return (
          <Switch
            checked={value}
            onChange={handleToggleStatus.bind(this, item.id)}
            className={`${value ? "bg-primary-400" : "bg-gray-200"}
          relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Status Active / Inactive</span>
            <span
              aria-hidden="true"
              className={`${value ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
            />
          </Switch>
        );
      },
    },
  ];
};
export const data = [
  {
    id: 1,
    nama: "Arief Wihartanto",
    noHp: "087745621232",
    email: "ariefwihartanto@gmail.com",
    gender: "pria",
    tglLahir: "02/12/1998",
    kota: "Bandung",
    status: true,
  },
  {
    id: 2,
    nama: "Rizky Yusuf",
    noHp: "087543232566",
    email: "rizky.yusuf@gmail.com",
    gender: "pria",
    tglLahir: "23/02/1996",
    kota: "Jakarta",
    status: true,
  },
  {
    id: 3,
    nama: "Ammar",
    noHp: "082345224334",
    email: "ammar@gmail.com",
    gender: "pria",
    tglLahir: "12/05/1992",
    kota: "Jakarta",
    status: false,
  },
];
export const CustomerSchema = yup.object().shape({
  nama: yup.string().required("Nama Harus Diisi"),
  noHp: yup.string().required("Nomor handphone harus diisi"),
  email: yup.string().required("Email harus diisi"),
  gender: yup.mixed().oneOf(["Pria", "Wanita"]).required("Gender harus diisi"),
  tglLahir: yup
    .date()
    .typeError("Tanggal lahir harus diisi")
    .required("Tanggal lahir harus diisi"),
  kota: yup.string().required("Kota harus diisi"),
});
