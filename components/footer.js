import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <Link href="/">Home</Link>
      <style jsx>{`
        .footer {
          background: #fff;
          border-top: 1px solid #ccc;
          align-items: center;
          display: flex;
        }
      `}</style>
    </footer>
  );
}
