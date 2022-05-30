import { useState } from 'react';
import CustomModal from '../../../../components/modal/modal';
import { CardCross, CardStyled, CardTitle } from './styled';
import { ITask } from '../../../../types/tasks';
import { useParams } from 'react-router-dom';

const BoardItem = ({ columnId, task }: { columnId: string; task: ITask }) => {
  const [show, setShow] = useState(false);
  const boardID = useParams().id;

  return (
    <CardStyled onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <CardTitle>{task.title}</CardTitle>
      <CustomModal
        columnId={columnId}
        taskId={task.id}
        title={task.title}
        type="item"
        boardId={boardID ? boardID : ''}
        userId=""
      />
    </CardStyled>
  );
};

export default BoardItem;
