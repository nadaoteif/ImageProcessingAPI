import express from 'express';
import File from './../../file';

interface ImageQuery {
  filename?: string;
  width?: string;
  height?: string;
}

const validate = async (query: ImageQuery): Promise<null | string> => {
  if (!(await File.isImageAvailable(query.filename))) {
    const availableImageNames: string = (
      await File.getAvailableImageNames()
    ).join(', ');
    return `Enter valid filename, Available names are: ${availableImageNames}.`;
  }

  if (!query.width && !query.height) {
    return null;
  }

  const width: number = parseInt(query.width || '');
  if (Number.isNaN(width) || width < 1) {
    return "Enter positive number only for 'width'";
  }

  const height: number = parseInt(query.height || '');
  if (Number.isNaN(height) || height < 1) {
    return "Enter positive number only for 'height'";
  }

  return null;
};

const images: express.Router = express.Router();

images.get(
  '/',
  async (
    request: express.Request,
    response: express.Response
  ): Promise<void> => {
    const validationMessage: null | string = await validate(request.query);
    if (validationMessage) {
      response.send(validationMessage);
      return;
    }

    let error: null | string = '';

    if (!(await File.isThumbAvailable(request.query))) {
      error = await File.createThumb(request.query);
    }

    if (error) {
      response.send(error);
      return;
    }

    const path: null | string = await File.getImagePath(request.query);
    if (path) {
      response.sendFile(path);
    } else {
      response.send('Unexpected error occurred!');
    }
  }
);

export default images;
