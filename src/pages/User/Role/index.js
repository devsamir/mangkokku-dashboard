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
// Config
import { columns, data, RoleSchema } from "./config";

const Role = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RoleSchema),
  });
  const [modalForm, setModalForm] = useState(false);
  const [sort, setSort] = useState({ direction: "", field: "" });

  // Function
  const onSubmit = (data) => {
    toast.success(`Berhasil Tambah Role`);
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
      <h1 className="text-3xl font-light text-gray-700 mb-2">User Role</h1>
      {/* BREADCRUMBS */}
      <div className="text-gray-500 text-sm flex items-center gap-2 mb-6">
        <Link to="/admin/dashboard">Admin</Link>
        <span>&gt;</span>
        <span>User</span>
        <span>&gt;</span>
        <span>Role</span>
      </div>
      <Card className="px-8 py-4 md:px-4 md:py-2">
        <div className="flex justify-between items-start gap-2 md:flex-col">
          <h1 className="text-xl text-gray-700 mb-4">List Role</h1>
          <Button
            className="mb-4"
            iconStart={<HiPlus />}
            color="primary"
            onClick={setModalForm.bind(this, true)}
          >
            Tambah Role
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
      <Modal
        title="Tambah Role"
        show={modalForm}
        onClose={setModalForm.bind(this, false)}
        className="max-w-xl"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("role")}
            type="text"
            error={errors.role}
            label="Role"
            margin="mb-2"
            placeholder="Masukan Role"
          />
          <TextField
            {...register("level")}
            error={errors.level}
            type="number"
            label="Level"
            margin="mb-4"
            placeholder="Masukan Level"
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
    </>
  );
};

export default Role;
