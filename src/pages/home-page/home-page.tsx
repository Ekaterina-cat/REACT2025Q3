import type { RootState } from '@store/store';

import { Button } from '@components/button';
import { Form } from '@components/form';
import { Modal } from '@components/modal';
import { closeModal, openModal } from '@store/modal-slice';
import { useDispatch, useSelector } from 'react-redux';

export const HomePage = () => {
  const dispatch = useDispatch();
  const { isOpen: isModalOpen, content: modalContent } = useSelector(
    (state: RootState) => state.modal
  );

  const handleOpenModal =
    (content: 'reactHookForm' | 'uncontrolledForm') => () => {
      dispatch(openModal(content));
    };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <section className="flex h-screen w-full flex-col items-center justify-between">
      <Button
        textButton="Form with React Hooks"
        onClick={handleOpenModal('reactHookForm')}
      />
      <Button
        textButton="Form without control"
        onClick={handleOpenModal('uncontrolledForm')}
      />
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          {modalContent === 'reactHookForm' ? <Form /> : <p>Not React</p>}
        </Modal>
      )}
    </section>
  );
};
