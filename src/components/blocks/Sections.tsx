import { Box } from './Box';

type SectionsProps = {
  num?: number;
};

export const Sections = ({ num = 1 }: SectionsProps) => {
  const borderColor = '#ffe4e6';
  const bgColor = '#fecdd3';

  return Array.from({ length: num }, (_, index) => (
    <div key={index} className="mb-14 flex flex-col gap-5">
      <Box
        mW={300}
        h={50}
        bgColor={borderColor}
        borderWidth={4}
        borderColor={bgColor}
        radius={10}
      />

      <Box
        mW="80%"
        h={500}
        bgColor={borderColor}
        borderWidth={4}
        borderColor={bgColor}
        radius={20}
      />
    </div>
  ));
};
