import { createFileRoute } from '@tanstack/react-router'

const title = 'Sign in — SUPERINTELLIGENS'
const description =
  'Sign in to SUPERINTELLIGENS and turn a plain-language idea into a deployable app in minutes.'

export const Route = createFileRoute('/login')({
  head: () => ({
    meta: [
      { title },
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [{ rel: 'canonical', href: '/login' }],
  }),
  component: LoginPage,
})

import { AuthForm } from '@/components/auth/auth-form'

function LoginPage() {
  return (
    <div className="login-light min-h-screen bg-background text-foreground">
      <div className="flex min-h-screen items-center justify-center overflow-y-auto px-6 py-12">
        <div className="w-full max-w-[420px]">
          <AuthForm />
        </div>
      </div>
    </div>
  )
}
