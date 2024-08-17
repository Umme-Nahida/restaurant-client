import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AddItem = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <SectionTitle
        subTitle={"as your wish"}
        heading={"Add Item "}
      ></SectionTitle>
      <div>
       
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>First Name</label>
            <input {...register("firstName")} />
            <label>Gender Selection</label>
            <select {...register("gender")}>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>
            <input type="submit" />
          </form>
      </div>
    </div>
  );
};

export default AddItem;
