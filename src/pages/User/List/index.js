import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiPlus, HiPencil, HiTrash } from "react-icons/hi";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// OWNS
import Button from "../../../components/Button";
import IconButton from "../../../components/IconButton";
import Card from "../../../components/Card";
import Table from "../../../components/Table";
import Modal from "../../../components/Modal";
import TextField from "../../../components/TextField";
import Select from "../../../components/Select";
// Config
import { useColumns, data as dummyData, UserSchema } from "./config";

const UserList = () => {
  // FORM
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UserSchema),
  });
  //   LOCAL STATE
  const [data, setData] = useState(() => dummyData);

  const [modalForm, setModalForm] = useState(false);
  const [statusForm, setStatusForm] = useState(false);
  const [sort, setSort] = useState({ direction: "", field: "" });

  //   State yang dibutuhkan Toogle Status User
  const [selectedUser, setSelectedUser] = useState(null);
  const handleToggleStatus = (id) => {
    setSelectedUser(id);
    setStatusForm(true);
  };
  const handleUpdateStatus = () => {
    const copyData = data.map((item) => {
      if (item.id === selectedUser) return { ...item, status: !item.status };
      return item;
    });
    setStatusForm(false);
    setData(copyData);
  };
  const columns = useColumns({ handleToggleStatus });

  // Function On Submit
  const onSubmit = (data) => {
    toast.success(`Berhasil Tambah User`);
    setModalForm(false);
  };

  //   Actions For Table
  const actions = (item) => {
    return (
      <div className="flex items-center justify-center gap-4">
        <IconButton
          className="text-orange-500 hover:text-orange-600"
          tooltip="Edit Role"
        >
          <HiPencil />
        </IconButton>
        <IconButton
          className="text-red-500 hover:text-red-600"
          tooltip="Delete Role"
        >
          <HiTrash />
        </IconButton>
      </div>
    );
  };

  return (
    <>
      <h1 className="text-3xl font-light text-gray-700 mb-2">User</h1>
      {/* BREADCRUMBS */}
      <div className="text-gray-500 text-sm flex items-center gap-2 mb-6">
        <Link to="/admin/dashboard">Admin</Link>
        <span>&gt;</span>
        <span>User</span>
        <span>&gt;</span>
        <span>List</span>
      </div>
      <Card className="px-8 py-4 md:px-4 md:py-2">
        <div className="flex justify-between items-start gap-2 md:flex-col">
          <h1 className="text-xl text-gray-700 mb-4">List User</h1>
          <Button
            className="mb-4"
            iconStart={<HiPlus />}
            color="primary"
            onClick={setModalForm.bind(this, true)}
          >
            Tambah User
          </Button>
        </div>
        <Table
          columns={columns}
          data={data}
          sort={sort}
          setSort={setSort}
          className="mb-8 max-h-[60vh]"
          actions={actions}
        />
      </Card>

      {/* MODAL FORM */}
      <Modal
        title="Tambah User"
        show={modalForm}
        onClose={setModalForm.bind(this, false)}
        className="max-w-xl"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Select
            {...register("role")}
            label="Role"
            margin="mb-2"
            error={errors.role}
          >
            <option value="admin">Admin</option>
            <option value="user1">User 1</option>
            <option value="user2">User 2</option>
          </Select>
          <TextField
            {...register("nama")}
            error={errors.nama}
            type="text"
            label="Nama Lengkap"
            margin="mb-2"
            placeholder="Masukan Nama Lengkap"
          />
          <TextField
            {...register("noHp")}
            error={errors.noHp}
            type="number"
            label="Nomor Handphone"
            margin="mb-2"
            placeholder="Masukan Nomor Handphone"
          />
          <TextField
            {...register("email")}
            error={errors.email}
            type="email"
            label="Email"
            margin="mb-4"
            placeholder="Masukan Email"
          />
          <div className="flex justify-end items-center gap-4">
            <Button
              className="bg-gray-200 hover:bg-gray-300"
              onClick={setModalForm.bind(this, false)}
            >
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Simpan
            </Button>
          </div>
        </form>
      </Modal>

      {/* MODAL TOGGLE STATUS */}
      <Modal
        title="Ubah Status User"
        show={statusForm}
        onClose={setStatusForm.bind(this, false)}
        className="max-w-sm"
      >
        <p className="text-gray-500 mb-4">
          Apakah Anda Yakin Akan Mengubah Status User ?
        </p>
        <div className="flex justify-end items-center gap-4">
          <Button
            className="bg-gray-200 hover:bg-gray-300"
            onClick={setStatusForm.bind(this, false)}
          >
            Cancel
          </Button>
          <Button color="primary" onClick={handleUpdateStatus}>
            Ubah
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default UserList;
