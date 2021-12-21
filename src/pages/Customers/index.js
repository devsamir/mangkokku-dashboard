import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiPlus, HiPencil, HiTrash, HiExclamation } from "react-icons/hi";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// OWNS
import Button from "../../components/Button";
import IconButton from "../../components/IconButton";
import Card from "../../components/Card";
import Table from "../../components/Table";
import Modal from "../../components/Modal";
import TextField from "../../components/TextField";
// Config
import { useColumns, data as dummyData, CustomerSchema } from "./config";
const Customer = () => {
  // FORM
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CustomerSchema),
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
    toast.success(`Berhasil Tambah Customers`);
    console.log(data);
    setModalForm(false);
  };

  const handleOpenFormModal = () => {
    setModalForm(true);
    clearErrors();
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
      <h1 className="text-3xl font-light text-gray-700 mb-2">Customers</h1>
      {/* BREADCRUMBS */}
      <div className="text-gray-500 text-sm flex items-center gap-2 mb-6">
        <Link to="/admin/dashboard">Admin</Link>
        <span>&gt;</span>
        <span>Customers</span>
      </div>
      <Card className="px-8 py-4 md:px-4 md:py-2 max-w-full">
        <div className="flex justify-between items-start gap-2 md:flex-col">
          <h1 className="text-xl text-gray-700 mb-4">List Customers</h1>
          <Button
            className="mb-4"
            iconStart={<HiPlus />}
            color="primary"
            onClick={handleOpenFormModal}
          >
            Tambah
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
        title="Tambah Customer"
        show={modalForm}
        onClose={setModalForm.bind(this, false)}
        className="max-w-xl"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
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
            margin="mb-2"
            placeholder="Masukan Email"
          />
          <div className="flex flex-col mb-2">
            <label className="text-xs font-medium mb-1">Gender</label>
            <div className="flex items-center gap-4">
              <label className="inline-flex items-center">
                <input
                  {...register("gender")}
                  type="radio"
                  className="form-radio"
                  name="gender"
                  value="Pria"
                />
                <span className="ml-2">Pria</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  {...register("gender")}
                  type="radio"
                  className="form-radio"
                  name="gender"
                  value="Wanita"
                />
                <span className="ml-2">Wanita</span>
              </label>
            </div>
            <small
              className={`text-red-500 text-sm flex gap-2 items-center ${
                errors.gender ? "visible" : "invisible"
              }`}
            >
              <HiExclamation />
              {errors?.gender?.message}
            </small>
          </div>
          <TextField
            {...register("tglLahir")}
            error={errors.tglLahir}
            type="date"
            label="Tanggal Lahir"
            margin="mb-2"
          />
          <TextField
            {...register("kota")}
            error={errors.kota}
            type="text"
            label="Kota"
            margin="mb-2"
            placeholder="Masukan Kota"
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
          Apakah Anda Yakin Akan Mengubah Status Customers ?
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

export default Customer;
