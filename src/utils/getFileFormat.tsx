// components
import {Image} from '../components/Image/Image';
import {Iconify} from '../components/Iconify';
import {
  FormatExcelEnum, FormatIllustratorEnum,
  FormatImgEnum, FormatPdfEnum, FormatPhotoshopEnum,
  FormatPowerpointEnum,
  FormatVideoEnum,
  FormatWordEnum
} from "../enums/fileFormat.enum";
import {JSX} from "react";

// ----------------------------------------------------------------------

export const getFileType = (fileUrl = ''):
    FormatPhotoshopEnum |
    FormatPdfEnum |
    FormatWordEnum |
    FormatPowerpointEnum |
    FormatVideoEnum |
    FormatImgEnum |
    FormatExcelEnum |
    FormatIllustratorEnum |
    string => {
  return (fileUrl && fileUrl.split('.').pop()) || '';
}

export const getFileName = (fileUrl: string) => {
  return fileUrl.substring(fileUrl.lastIndexOf('/') + 1).replace(/\.[^/.]+$/, '');
}

export const getFileFullName = (fileUrl: string) => {
  return fileUrl.split('/').pop();
}

export const getFileFormat = (fileUrl: string) => {
  let format;

  switch (getFileType(fileUrl)) {
    case FormatImgEnum[getFileType(fileUrl) as FormatImgEnum]:
      format = 'image';
      break;
    case FormatVideoEnum[getFileType(fileUrl) as FormatVideoEnum]:
      format = 'video';
      break;
    case FormatWordEnum[getFileType(fileUrl) as FormatWordEnum]:
      format = 'word';
      break;
    case FormatExcelEnum[getFileType(fileUrl) as FormatExcelEnum]:
      format = 'excel';
      break;
    case FormatPowerpointEnum[getFileType(fileUrl) as FormatPowerpointEnum]:
      format = 'powerpoint';
      break;
    case FormatPdfEnum[getFileType(fileUrl) as FormatPdfEnum]:
      format = 'pdf';
      break;
    case FormatPhotoshopEnum[getFileType(fileUrl) as FormatPhotoshopEnum]:
      format = 'photoshop';
      break;
    case FormatIllustratorEnum[getFileType(fileUrl) as FormatIllustratorEnum]:
      format = 'illustrator';
      break;
    default:
      format = getFileType(fileUrl);
  }

  return format;
}

const getIcon = (name: string) => (
    <Image
        // @ts-ignore
        src={`https://codingmonk/assets/icons/file/${name}.svg`}
        alt={name}
        sx={{ width: 28, height: 28 }}
    />
);

export const getFileThumb = (fileUrl: string) => {
  let thumb: JSX.Element;
  switch (getFileFormat(fileUrl)) {
    case 'video':
      thumb = getIcon('format_video');
      break;
    case 'word':
      thumb = getIcon('format_word');
      break;
    case 'excel':
      thumb = getIcon('format_excel');
      break;
    case 'powerpoint':
      thumb = getIcon('format_powerpoint');
      break;
    case 'pdf':
      thumb = getIcon('format_pdf');
      break;
    case 'photoshop':
      thumb = getIcon('format_photoshop');
      break;
    case 'illustrator':
      thumb = getIcon('format_ai');
      break;
    case 'image':
      // @ts-ignore
      thumb = <Image src={fileUrl} alt={fileUrl} sx={{ height: 1 }} />;
      break;
    default:
      thumb = <Iconify icon={'eva:file-fill'} sx={{ width: 28, height: 28 }} />;
  }
  return thumb;
}
