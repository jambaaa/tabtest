import Link from 'next/link'

type Props = {
  path: string;
  name: string;
};

export default function MenuItem({ path, name }: Props) {
  return (
    <main>
      <Link href={path}>{name}</Link>
    </main>
  )
}
