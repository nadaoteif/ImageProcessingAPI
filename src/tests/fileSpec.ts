import { promises as fs } from 'fs';
import path from 'path';
import File from './../file';

describe('Test processing via sharp', (): void => {
  it('Width Error', async (): Promise<void> => {
    const error: null | string = await File.createThumb({
      filename: 'foo',
      width: '-100',
      height: '500'
    });
    expect(error).not.toBeNull();
  });

  it('Filename Error', async (): Promise<void> => {
    const error: null | string = await File.createThumb({
      filename: 'foo',
      width: '100',
      height: '500'
    });
    expect(error).not.toBeNull();
  });

  it('No Error', async (): Promise<void> => {
    await File.createThumb({
      filename: 'palmtunnel',
      width: '99',
      height: '99'
    });

    const resizedImagePath: string = path.resolve(
      File.imagesThumbPath,
      `palmtunnel-99x99.jpg`
    );
    let errorFile: null | string = '';

    try {
      await fs.access(resizedImagePath);
      errorFile = null;
    } catch {
      errorFile = 'Not created';
    }

    expect(errorFile).toBeNull();
  });
});

afterAll(async (): Promise<void> => {
  const resizedImagePath: string = path.resolve(
    File.imagesThumbPath,
    'palmtunnel-99x99.jpg'
  );

  try {
    await fs.access(resizedImagePath);
    fs.unlink(resizedImagePath);
  } catch {
    // blank
  }
});
