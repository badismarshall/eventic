'use client'
import { BadgeCheck, FileIcon, Upload } from 'lucide-react';
import { useCallback, useState } from 'react'
import { useDropzone, FileWithPath } from 'react-dropzone'
import { Card, CardContent } from '../ui/card';


type FileUploaderProps = {
    fieldChange: (files : File[]) => void;
}


export default function FileUploader({fieldChange}: FileUploaderProps) {
    const [file, setFile] = useState<File[]>([]);
    const [fileUrl, setFileUrl] = useState<string>('');

    const onDrop = useCallback((acceptedFiles : FileWithPath[]) => {
        setFile(acceptedFiles)
        fieldChange(acceptedFiles)
        setFileUrl(URL.createObjectURL(acceptedFiles[0]))
      }, [file])
    // accept images 
    const {getRootProps, getInputProps} = useDropzone({
        onDrop, 
        accept: {
            'image/jpeg': ['.jpeg'],
            'image/png': ['.png'],
        }
    })

return (
<div {...getRootProps()} className='flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer transition ease-in-out duration-300 delay-150'>
  <input {...getInputProps()} className='cursor-pointer'/>
  {
    fileUrl ? (
        <>
        <Card className="mt-3  h-[265px]">
            <CardContent className="w-full h-full p-5">
                <div className="border-2 border-dashed border-gray-200 rounded-lg flex flex-col gap-1 p-6 items-center h-full justify-center">
                    <BadgeCheck className="w-12 h-12 text-primary"/>
                    <span className="text-sm font-medium text-gray-500">{file[0]?.name}</span>
                    <span className="text-sm text-primary">Fichier Ajouté avec succès</span>
                    <span className="text-xs text-gray-500 text-center">Cliquez ou faites glisser pour remplacer</span>
                </div>
            </CardContent>
        </Card>
        </>

    ) : (

        <Card className="mt-3 h-[265px]">
            <CardContent className="w-full h-full p-5">
                <div className="border-2 border-dashed border-gray-200 rounded-lg flex flex-col gap-1 p-6 items-center h-full justify-center">
                    <FileIcon className="w-12 h-12" />
                    <span className="text-sm font-medium text-gray-500 text-center">Cliquez ou faites glisser pour ajouter un fichier</span>
                    <span className="text-xs text-gray-500">JPEG, PNG</span>
                </div>
            </CardContent>
        </Card>
    )
  }
</div>
)
}

