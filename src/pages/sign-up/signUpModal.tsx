import { Modal } from 'antd';
import { FC } from 'react';
import { createContext, useEffect } from 'react';
const ReachableContext = createContext('');
const UnreachableContext = createContext('');

interface Props {
  message: string;
}

const WarningModal: FC<Props> = (props) => {
  const [modal, contextHolder] = Modal.useModal();
  const config = {
    title: props.message,
    content: <></>
  };

  useEffect(() => {
    modal.error(config);
  }, []);

  return (
    <ReachableContext.Provider value="">
      {contextHolder}
      <UnreachableContext.Provider value="Bamboo" />
    </ReachableContext.Provider>
  );
};

export default WarningModal;
