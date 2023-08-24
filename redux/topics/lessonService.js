import { ApiUrls } from '../../utils/apiUrls';
import axios from 'axios';

export const createLesson = async (lessonData) => {
  try {
    const { data } = await axios.post(ApiUrls.createLesson, lessonData);

    // Handle the response data accordingly
    return data;
  } catch (error) {
    // Handle errors appropriately
    throw error;
  }
};
