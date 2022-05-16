export type boardType = {
  id: string | '';
  title: string | '';
  columns: [
    {
      id: string | '';
      title: string | '';
      order: number;
      tasks: [
        {
          id: string | '';
          title: string | '';
          order: number;
          done: boolean;
          description: string | '';
          userId: string | '';
          files: [
            {
              filename: string | '';
              fileSize: number;
            }
          ];
        }
      ];
    }
  ];
};
