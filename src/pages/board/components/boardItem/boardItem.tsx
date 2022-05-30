import { useState } from 'react';
import CustomModal from '../../../../components/modal/modal';
import { CardCross, CardStyled, CardTitle } from './styled';
import { ITask } from '../../../../types/tasks';
import { useParams } from 'react-router-dom';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const BoardItem = ({ columnId, task }: { columnId: string; task: ITask }) => {
  const [show, setShow] = useState(false);
  const boardID = useParams().id;
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: task.id
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <CardStyled
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
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
