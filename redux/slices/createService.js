import { createLessonPlan } from "../slices/createSlice";
import { useDispatch } from "react-redux";

export const createLessonPlanService = (data) => {
  const dispatch = useDispatch();

  return async () => {
    try {
      await dispatch(createLessonPlan(data));
    } catch (error) {
      // Handle error as needed
      console.error("Error creating lesson plan:", error);
    }
  };
};
