import { AlertCircle, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md text-center">
        <div className="flex justify-center mb-6">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{ background: "var(--mavrik-orange-muted)" }}
          >
            <AlertCircle className="w-8 h-8" style={{ color: "var(--mavrik-orange)" }} />
          </div>
        </div>

        <h1 className="text-5xl font-extrabold mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          404
        </h1>
        <h2 className="text-lg font-bold text-foreground mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Page not found
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Sorry, the page you're looking for doesn't exist or has moved.
        </p>

        <button onClick={() => setLocation("/")} className="btn-mavrik px-6 py-3 text-sm inline-flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </button>
      </div>
    </div>
  );
}
