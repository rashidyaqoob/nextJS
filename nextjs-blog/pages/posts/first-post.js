import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/" class='font-bold'>Back to home</Link>
      </h2>
    </>
  );
}