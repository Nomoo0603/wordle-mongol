import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Хэрхэн тоглох вэ?" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
      Үгийг 6 оролдлогоор таагаарай. Таамаглал бүрийн дараа хавтангийн өнгө болно
        Таны таамаг үгтэй хэр ойрхон байсныг харуулахын тулд өөрчил.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="Ө"
          status="correct"
        />
        <Cell value="В" />
        <Cell value="Г" />
        <Cell value="Ө" />
        <Cell value="Н" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
      Ө үсэг нь буруу үгийн зөв газарт байна. 
      </p>
      

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="Х" />
        <Cell value="А" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="М"
          status="present"
        />
        <Cell value="А" />
        <Cell value="Р" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
      L үсэг үгэнд байгаа боловч буруу газар байна.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="Н" />
        <Cell value="У" />                                               
        <Cell value="Р" />
        <Cell isRevealing={true} isCompleted={true} value="А" status="absent" />
        <Cell value="Х" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
      А үсэг таах үгэнд байгаа боловч буруу газар байна.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        
         -{' '}hh
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
         
        </a>{' '}
      </p>
    </BaseModal>
  )
}
