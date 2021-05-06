import React, { useState, useEffect } from 'react'
import apiVilla from './ApiVilla'
import PageHeader from '../../components/PageHeader'
import AddEditVilla from './AddEditVilla'
import {PencilAltIcon, TrashIcon} from '@heroicons/react/solid'


export default function Villa() {

    const [villas, setVillas] = useState([]);
    const [modal,setModal] = useState(false);
    const [status,setStatus] = useState(false);

    const[villa,setVilla] = useState({
        villa_id : undefined,
        actionType : undefined
    })

    useEffect(() => {
        apiVilla.list().then(data => {
            setVillas(data)
        }).catch(err => {
            console.log(err)
        });

    }, []); 

    useEffect(() => {
        apiVilla.list().then(data => {
            setVillas(data)
            
        }).catch(err => {
            console.log(err)
        });

        setStatus(false)

    }, [status]); 

    const onCreate=async(id)=>{
        setVilla({
            villa_id : id,
            actionType : 'Add'
        });
        setModal(true);
    }

    const onEdit=async(id)=>{
        setVilla({
            villa_id : id,
            actionType : 'Edit'
        });
        setModal(true);
    }

    const onDelete = async (id)=>{
        apiVilla.remove(id).then(()=>{
            setStatus(true)
        });
    }
   

   


    return (
        <div>
            <PageHeader title={'Villas'} setModal={()=>onCreate()}/>


            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        
                                    <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Villa Id
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Villa Title
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Harga Sewa
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Deskripsi
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Address
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Tipe
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Kamar Tidur
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Kamar Mandi
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Lantai
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Status
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Fasilitas
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            User ID
                                        </th>

                                        <th
                                            className="px-6 py-3 col-span-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Action
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {villas &&
                                    villas.map((data) => (
                                        <tr key={data.villa_id}>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.villa_id}</div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.villa_title}</div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.villa_harga_sewa}</div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.villa_address}</div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.villa_kamar_tidur}</div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.villa_kamar_mandi}</div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.villa_tipe}</div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.villa_lantai}</div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.villa_status}</div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.villa_fasilitas}</div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.villa_user_id}</div>
                                            </td>

                                            

                                            <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                                <div className="mt-5 flex lg:mt-0 lg:ml-4">
                                                    <span className="hidden sm:block mr-2">
                                                        <button
                                                            onClick={()=>{
                                                                onEdit(data.villa_id)
                                                            }}
                                                            type="button"
                                                            className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                                                        >
                                                            <PencilAltIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                                                        </button>
                                                    </span>
                                                    <span className="hidden sm:block">
                                                        <button
                                                            onClick={()=>{
                                                                if (window.confirm('Delete this record ?'))
                                                                onDelete(data.villa_id)
                                                            }}
                                                            type="button"
                                                            className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                                                        >
                                                            <TrashIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                                                        </button>
                                                    </span>
                                                </div>
                                            </td></tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        { modal ? <AddEditVilla 
            title={'Villa'} 
            setModal={()=>setModal(false)}
            setStatus={()=>setStatus(true)}  
            villa={villa}
        /> : null} 

        </div>
    )
}
