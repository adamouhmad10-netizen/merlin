import { ButtonLink } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="on-dark flex min-h-[70vh] items-center">
      <div className="shell text-center">
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-bronze">Error 404</span>
        <h1 className="display-lg mt-6 text-ivory">This page is not in the record.</h1>
        <p className="lede mx-auto mt-6 max-w-md text-steel">
          The page you are looking for could not be found. Return to the homepage to continue.
        </p>
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/" variant="primary" withArrow>
            Return home
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
