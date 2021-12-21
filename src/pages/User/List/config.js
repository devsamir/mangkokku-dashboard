import { Switch } from "@headlessui/react";
import * as yup from "yup";

export const useColumns = ({ handleToggleStatus }) => {
  return [
    { field: "role", headerName: "Role", sortable: true },
    { field: "nama", headerName: "Nama Lengkap", sortable: true },
    { field: "noHp", headerName: "Nomor HP", sortable: true },
    { field: "email", headerName: "Email", sortable: true },
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
            <span className="sr-only">Use setting</span>
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
    role: "Admin",
    nama: "Adi Kurniawan",
    noHp: "087745621344",
    email: "adikurniawan@gmail.com",
    status: true,
  },
  {
    id: 2,
    role: "User 1",
    nama: "Muhammad",
    noHp: "087543215566",
    email: "muhammad27@gmail.com",
    status: true,
  },
  {
    id: 3,
    role: "User 1",
    nama: "Samir",
    noHp: "087745224334",
    email: "samir@gmail.com",
    status: false,
  },
];
export const UserSchema = yup.object().shape({
  role: yup.string().required("Role Harus Diisi"),
  nama: yup.string().required("Nama Harus Diisi"),
  noHp: yup.string(),
  email: yup.string(),
});
