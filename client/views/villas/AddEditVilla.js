import React, { Fragment, useRef, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { DocumentAddIcon } from '@heroicons/react/solid'
import apiVilla from './ApiVilla'
import apiUser from '../users/ApiUser'

export default function AddEditVilla(props) {
    const [open, setOpen] = useState(true)
    const cancelButtonRef = useRef();

    const [values, setValues] = useState({
        villa_id: undefined,
        villa_title: undefined,
        villa_harga_sewa: undefined,
        villa_description: undefined,
        villa_address: undefined,
        villa_kamar_tidur: undefined,
        villa_kamar_mandi: undefined,
        villa_tipe: undefined,
        villa_lantai: undefined,
        villa_fasilitas: undefined,
        villa_status: undefined,
        villa_user_id: undefined,
        error: ""
    });

    const [users, setUsers] = useState([])


    useEffect(() => {
        apiUser.list().then(data => {
            setUsers(data);
        });

        if (props.villa.actionType === 'Edit') {
            apiVilla.findOne(props.villa.villa_id).then(data => {
                if (data.error) {
                    console.log(data.error)
                } else {
                    setValues({
                        ...values,
                        villa_id: data.villa_id,
                        villa_title: data.villa_title,
                        villa_harga_sewa: data.villa_harga_sewa,
                        villa_description: data.villa_description,
                        villa_address: data.villa_address,
                        villa_kamar_tidur: data.villa_kamar_tidur,
                        villa_kamar_mandi: data.villa_kamar_mandi,
                        villa_lantai: data.villa_lantai,
                        villa_status: data.villa_status,
                        villa_user_id: data.villa_user_id
                    })
                }


            });
        } else {
            setValues({
                ...values,
                villa_id: undefined,
                villa_title: undefined,
                villa_description: undefined,
                villa_harga_sewa: undefined,
                villa_address: undefined,
                villa_kamar_mandi: undefined,
                villa_kamar_tidur: undefined,
                villa_lantai: undefined,
                villa_status: undefined,
                villa_fasilitas: undefined,
                villa_tipe: undefined,
                villa_user_id: undefined,
            })
        }


    }, [props.villa.actionType])



    const handleOnChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (props.villa.actionType === 'Add') {
            const villa = {
                villa_id: values.villa_id || undefined,
                villa_title: values.villa_title || undefined,
                villa_harga_sewa: values.villa_harga_sewa || undefined,
                villa_description: values.villa_description || undefined,
                villa_address: values.villa_address || undefined,
                villa_tipe: values.villa_tipe || undefined,
                villa_kamar_tidur: values.villa_kamar_tidur || undefined,
                villa_kamar_mandi: values.villa_kamar_mandi || undefined,
                villa_fasilitas: values.villa_fasilitas || undefined,
                villa_lantai: values.villa_lantai || undefined,
                villa_status: values.villa_status || undefined,
                villa_user_id: values.villa_user_id || undefined,

            }

            apiVilla.create(villa).then(data => {
                if (data.errors) {
                    console.log('create new record failed')
                    setValues({ ...values, error: data.errors[0].message })
                } else {
                    props.setStatus();
                    props.setModal();
                }
            })
        } else if (props.villa.actionType === 'Edit') {
            apiVilla.update(values).then((data) => {
                if (data.error) {
                    setValues({ ...values, error: data.errors[0].message })
                } else {
                    props.setStatus();
                    props.setModal();
                }
            });
        }


    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                static
                className="fixed z-10 inset-0 overflow-y-auto"
                initialFocus={cancelButtonRef}
                open={open}
                onClose={setOpen}
            >
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <DocumentAddIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                            {props.villa.actionType} {props.title}
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            {/** code here... */}
                                            <p className="text-red-900 text-xs italic">{values.error}</p>
                                            <form method="POST" action="#">
                                                <input id="villa_id" name="villa_id"
                                                    value={values.villa_id}
                                                    onChange={handleOnChange('villa_id')}
                                                    type="text" placeholder="e.g Id" />

                                                <input id="villa_title" name="villa_title"
                                                    value={values.villa_title}
                                                    onChange={handleOnChange('villa_title')}
                                                    type="text" placeholder="NamaVilla" />

                                                <input id="villa_harga_sewa" name="villa_harga_sewa"
                                                    value={values.villa_harga_sewa}
                                                    onChange={handleOnChange('villa_harga_sewa')}
                                                    type="number" placeholder="Harga" />

                                                <input id="villa_description" name="villa_description"
                                                    value={values.villa_description}
                                                    onChange={handleOnChange('villa_description')}
                                                    type="text" placeholder="Deskripsi" />

                                                <input id="villa_address" name="villa_address"
                                                    value={values.villa_address}
                                                    onChange={handleOnChange('villa_address')}
                                                    type="text" placeholder="Alamat" />

                                                <input id="villa_kamar_tidur" name="villa_kamar_tidur"
                                                    value={values.villa_kamar_tidur}
                                                    onChange={handleOnChange('villa_kamar_tidur')}
                                                    type="number" placeholder="Kamar" />

                                                <input id="villa_kamar_mandi" name="villa_kamar_mandi"
                                                    value={values.villa_kamar_mandi}
                                                    onChange={handleOnChange('villa_kamar_mandi')}
                                                    type="number" placeholder="Kamar Mandi" />

                                                <input id="villa_tipe" name="villa_tipe"
                                                    value={values.villa_tipe}
                                                    onChange={handleOnChange('villa_tipe')}
                                                    type="text" placeholder="Tipe" />

                                                <input id="villa_lantai" name="villa_lantai"
                                                    value={values.villa_lantai}
                                                    onChange={handleOnChange('villa_lantai')}
                                                    type="number" placeholder="Tingkat" />

                                                <input id="villa_status" name="villa_status"
                                                    value={values.villa_status}
                                                    onChange={handleOnChange('villa_status')}
                                                    type="text" placeholder="Status" />

                                                <input id="villa_user_id" name="villa_user_id"
                                                    value={values.villa_user_id}
                                                    onChange={handleOnChange('villa_user_id')}
                                                    type="number" placeholder="UserID" />

                                                <div>
                                                    <select id="user_id" type="text"
                                                        value={values.user}
                                                        onChange={handleOnChange('user_id')}
                                                    >
                                                        <option>Choose User</option>
                                                        {
                                                            //users &&
                                                            // users.map(data => {
                                                            //     return (<option value={data.user_id}>{data.user_name}</option>)
                                                            // })
                                                        }
                                                    </select>
                                                </div>

                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={onSubmit}
                                >
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => props.setModal()}
                                    ref={cancelButtonRef}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
