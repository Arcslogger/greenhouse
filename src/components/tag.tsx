export default function Tag({ title }: { title: string }) {
  return (
    <span className="px-2 py-0.5 rounded-full bg-iris/40 no-underline text-sm flex-none">
      #{title}
    </span>
  );
}
