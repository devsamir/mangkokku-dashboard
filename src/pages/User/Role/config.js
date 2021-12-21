import * as yup from "yup";

export const columns = [
  { field: "role", headerName: "Role", sortable: true },
  { field: "level", headerName: "Level" },
];
export const data = [
  { id: 1, role: "Admin", level: 30 },
  { id: 2, role: "User 1", level: 20 },
  { id: 3, role: "User 2", level: 10 },
];
export const RoleSchema = yup.object().shape({
  role: yup.string().required("Role Harus Diisi"),
  level: yup
    .number()
    .typeError("Level Harus Angka")
    .required("Level Harus Diisi"),
});
