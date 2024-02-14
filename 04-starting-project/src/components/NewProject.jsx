import React, { useRef } from 'react'
import Input from './Input'
import Modal from './Modal'

const NewProject = ({onAddProject,onCancelProject}) => {

    const title = useRef()
    const description = useRef()
    const dueDate = useRef()
    const modal = useRef()

    const handleSave = () => {
        const titleValue = title.current.value
        const descriptionValue = description.current.value
        const dueDateValue = dueDate.current.value
        if(titleValue.trim() === '' || descriptionValue.trim() === '' || dueDateValue.trim() === '') {
            modal.current.open();
            return
        } 
        onAddProject({
            title: titleValue,
            description: descriptionValue,
            dueDate: dueDateValue
        })
    }

  return (
    <>
    <Modal ref={modal}>
        <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid input</h2>
    </Modal>
    <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
            <li>
                <button className='text-stone-800 hover:text-stone-950' onClick={onCancelProject}>Cancel</button>
            </li>
            <li>
                <button className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950' onClick={handleSave}>Save</button>
            </li>
        </menu>
        <div>
            <Input ref={title} label="Title" type='text'/>
            <Input ref={description} label="Description" textarea/>
            <Input ref={dueDate} label="Due date" type='date'/>
        </div>
    </div>
    </>
  )
}

export default NewProject