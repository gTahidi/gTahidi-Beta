import { ApiUrls } from '../../utils/apiUrls';
import axios from 'axios';

export const createLesson = async (lessonData) => {
  try {
    const { data } = await axios.post(ApiUrls.createLesson, lessonData);

    return data;
  } catch (error) {
    // Handle errors appropriately
    throw error;
  }
};

export const BASE_URL = `https://ailogic.openai.azure.com/openai/deployments/gtahidiAI/chat/completions?api-version=2023-03-15-preview`;
