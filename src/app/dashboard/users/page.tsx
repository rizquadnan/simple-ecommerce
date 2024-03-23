"use client";

import { Button } from "@/ui_kit";
import {
  Box,
  DialogContent,
  DialogRoot,
  DialogTitle,
  Flex,
  Heading,
  IconButton,
  Inset,
  TableBody,
  TableCell,
  TableColumnHeaderCell,
  TableHeader,
  TableRoot,
  TableRow,
  Text,
} from "@radix-ui/themes";
import { Cross1Icon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";

import classes from "./page.module.css";
import DashboardChip from "../components/DashboardChip";
import { Pagination } from "../components/Pagination";
import { UserForm } from "../components/UserForm";

const userData = [
  {
    id: 1,
    number: 1,
    name: "Aden S. Putra",
    email: "aden@gmail.com",
    contactNumber: "0818782328",
    deleted: false,
  },
  {
    id: 2,
    number: 2,
    name: "Aden S. Putra",
    email: "aden@gmail.com",
    contactNumber: "0818782328",
    deleted: true,
  },
  {
    id: 3,
    number: 3,
    name: "Aden S. Putra",
    email: "aden@gmail.com",
    contactNumber: "0818782328",
    deleted: false,
  },
  {
    id: 4,
    number: 4,
    name: "Aden S. Putra",
    email: "aden@gmail.com",
    contactNumber: "0818782328",
    deleted: true,
  },
];

const Users = () => {
  const [dialog, setDialog] = useState<"create" | "update" | "delete" | "none">(
    "none"
  );
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  return (
    <Box className={classes.root}>
      <Flex justify="between" align="center">
        <Heading className={classes.headline}>Manajemen User</Heading>
        <Button
          style={{ padding: "8px 24px", fontWeight: 700 }}
          onClick={() => setDialog("create")}
        >
          Tambah User
        </Button>
      </Flex>

      <TableRoot className={classes.table}>
        <TableHeader>
          <TableRow>
            <TableColumnHeaderCell>No</TableColumnHeaderCell>
            <TableColumnHeaderCell>Nama Lengkap</TableColumnHeaderCell>
            <TableColumnHeaderCell>Email</TableColumnHeaderCell>
            <TableColumnHeaderCell>No Telepon</TableColumnHeaderCell>
            <TableColumnHeaderCell>Status</TableColumnHeaderCell>
            <TableColumnHeaderCell></TableColumnHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userData.map((v) => (
            <TableRow key={v.number}>
              <TableCell>{v.number}</TableCell>
              <TableCell>{v.name}</TableCell>
              <TableCell>{v.email}</TableCell>
              <TableCell>{v.contactNumber}</TableCell>
              <TableCell>
                <DashboardChip variant={v.deleted ? "inActive" : "active"} />
              </TableCell>
              <TableCell>
                <Flex gap="3">
                  <IconButton
                    variant="solid"
                    size="1"
                    radius="full"
                    style={{ background: "#EC9024", cursor: "pointer" }}
                    onClick={() => {
                      setDialog("update");
                      setSelectedUserId(v.id);
                    }}
                  >
                    <Pencil1Icon />
                  </IconButton>
                  <IconButton
                    variant="solid"
                    size="1"
                    radius="full"
                    color="red"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setDialog("delete");
                      setSelectedUserId(v.id);
                    }}
                  >
                    <TrashIcon />
                  </IconButton>
                </Flex>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableRoot>

      <Pagination
        page={1}
        style={{ marginTop: "16px", justifyContent: "end" }}
      />

      <DialogRoot open={dialog === "create" || dialog === "update"}>
        <DialogContent style={{ maxWidth: 450, position: "relative" }}>
          <IconButton
            radius="full"
            variant="ghost"
            size="2"
            style={{
              cursor: "pointer",
              position: "absolute",
              right: "16px",
              top: "16px",
            }}
            onClick={() => setDialog("none")}
          >
            <Cross1Icon height="24px" width="24px" />
          </IconButton>
          <DialogTitle style={{ textAlign: "center" }}>
            {dialog === "create" ? "Tambah Data User" : "Ubah Data User"}
          </DialogTitle>

          <UserForm
            initialData={
              dialog === "update" && selectedUserId
                ? userData.find((v) => v.id === selectedUserId)
                : undefined
            }
            onSubmit={console.log}
          />
        </DialogContent>
      </DialogRoot>

      <DialogRoot open={dialog === "delete"}>
        <DialogContent style={{ maxWidth: 450, position: "relative" }}>
          <Inset>
            <Box style={{ position: "relative", height: 120 }}>
              <Box
                width="100%"
                style={{
                  background: "#41A0E4",
                  height: 72,
                  borderRadius: "0px 0px 1px 1px",
                }}
              ></Box>
              <Box
                style={{
                  height: 75,
                  width: 75,
                  borderRadius: "100%",
                  background: "#D83A56",
                  position: "absolute",
                  zIndex: 1,
                  top: 32,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              ></Box>
            </Box>
          </Inset>
          <Flex
            direction="column"
            gap="3"
            style={{ textAlign: "center", marginTop: "48px" }}
          >
            <Text style={{ fontSize: 24, fontWeight: 700 }}>
              Konfirmasi Hapus
            </Text>
            <Text style={{ color: "#A4A4A4" }}>{`Apakah kamu yakin menghapus ${
              userData.find((v) => v.id === selectedUserId)?.name
            }?`}</Text>
          </Flex>
          <Inset side="x" mt="2">
            <Flex
              justify="end"
              gap="5"
              style={{
                marginTop: "12px",
                borderTop: "1px solid #E0E0E0",
                paddingTop: "24px",
                paddingRight: "24px",
              }}
            >
              <Button variant="outline" onClick={() => setDialog("none")}>
                Batal
              </Button>
              <Button>Hapus</Button>
            </Flex>
          </Inset>
        </DialogContent>
      </DialogRoot>
    </Box>
  );
};

export default Users;
