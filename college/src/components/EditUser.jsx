import { useState, useEffect } from "react";
import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from "@mui/material";
import { editUser, getUser } from "../service/api.js";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultValue = {
  name: "",
  email: "",
  phone: "",
  rollnum: "",
};

const EditUser = () => {
  const [user, setUser] = useState(defaultValue);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    loadUserDetails();
  }, []);
  const loadUserDetails = async () => {
    const response = await getUser(id);
    setUser(response.data);
  };
  const onValueChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const editUserDetails = async () => {
    await editUser(user, id);
    navigate("/all");
  };

  return (
    <Container>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" value={user.name} />
      </FormControl>
      <FormControl>
        <InputLabel>email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" value={user.email} />
      </FormControl>
      <FormControl>
        <InputLabel>rollnum</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="rollnum" value={user.rollnum} />
      </FormControl>
      <FormControl>
        <InputLabel>phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" value={user.phone} />
      </FormControl>
      <FormControl>
        <Button variant="outlined" onClick={() => editUserDetails()}>
          Edit User
        </Button>
      </FormControl>
    </Container>
  );
};
export default EditUser;
