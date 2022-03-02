import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";

// reactstrap
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

// actions
import {
  addTodoDoc,
  setOpenFormDialog,
  setTodoDoc,
  updateTodoDoc,
} from "../store/action/todo";

// helpers
import generateRandomString from "../helpers/generate-random-string";
import generateCreatedAt from "../helpers/generate-created-at";

const validationSchema = yup.object({
  title: yup.string().required("*Must be filled"),
  description: yup.string().required("*Must be filled"),
});

const FormDialog = ({ title, open }) => {
  const dispatch = useDispatch();

  const { doc: todoDoc } = useSelector(({ todo }) => todo);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (Boolean(todoDoc)) {
        // UPDATE TODO
        const data = {
          id: todoDoc.id,
          title: values.title,
          description: values.description,
        };

        dispatch(updateTodoDoc(data));
      } else {
        // ADD TODO
        const data = {
          id: generateRandomString(5),
          title: values.title,
          description: values.description,
          status: 0,
          createdAt: generateCreatedAt(),
        };

        dispatch(addTodoDoc(data));
      }

      handleCloseButton();
    },
  });

  const handleCloseButton = () => {
    formik.setErrors({});
    formik.handleReset();
    dispatch(setOpenFormDialog(!open));
    dispatch(setTodoDoc(null));
  };

  useEffect(() => {
    if (todoDoc) {
      formik.setFieldValue("title", todoDoc.title);
      formik.setFieldValue("description", todoDoc.description);
    }
  }, [todoDoc]);

  return (
    <Modal backdrop={true} toggle={handleCloseButton} isOpen={open}>
      <ModalHeader toggle={handleCloseButton}>{title} Dialog</ModalHeader>
      <Form autoComplete="off" onSubmit={formik.handleSubmit}>
        <ModalBody>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              id="title"
              placeholder="ex: make a drink"
              onChange={formik.handleChange}
              value={formik.values.title}
              invalid={formik.touched.title && Boolean(formik.errors.title)}
            />
            {formik.touched.title && Boolean(formik.errors.title) && (
              <small className="text-danger">{formik.errors.title}</small>
            )}
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              id="description"
              name="description"
              type="textarea"
              placeholder="ex: make a drink for happiness"
              onChange={formik.handleChange}
              value={formik.values.description}
              invalid={
                formik.touched.description && Boolean(formik.errors.description)
              }
            />
            {formik.touched.description &&
              Boolean(formik.errors.description) && (
                <small className="text-danger">
                  {formik.errors.description}
                </small>
              )}
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleCloseButton}>Cancel</Button>
          <Button type="submit" color="primary">
            Save
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default FormDialog;
