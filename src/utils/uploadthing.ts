import {
   generateUploadButton,
   generateUploadDropzone,
} from "@uploadthing/react";

import { generateReactHelpers, generateUploader } from "@uploadthing/react"

import type { OurFileRouter } from "@/app/api/uploadthing/core"

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();

export const Uploader = generateUploader<OurFileRouter>({});

export const {
   useUploadThing,
   uploadFiles
} = generateReactHelpers<OurFileRouter>()

