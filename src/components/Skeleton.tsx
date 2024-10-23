const Skeleton: React.FC = () => (
  <div className="flex w-full animate-pulse flex-col gap-5">
    <div className="flex items-start gap-3">
      <div className="flex-1 space-y-2 py-1">
        <div className="h-4 w-5/6 rounded bg-default/50"></div>
        <div className="h-4 w-1/2 rounded bg-default/50"></div>
      </div>
    </div>
  </div>
);

export default Skeleton;
