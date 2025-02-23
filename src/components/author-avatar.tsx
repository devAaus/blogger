import { Author } from '@/lib/types'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import Link from 'next/link'

interface AuthorProps {
   author: Author | undefined
}

export default function AuthorAvatar(
   { author }: AuthorProps
) {
   const firstName = author?.firstName ?? ''
   const lastName = author?.lastName ?? ''
   return (
      <Link href={`/author/${author?.userName}`} className="flex justify-center items-center gap-3">
         <Avatar>
            <AvatarImage src={author?.avatar} alt={author?.firstName} />
            <AvatarFallback>{author?.firstName}</AvatarFallback>
         </Avatar>
         <div>
            <p className="font-medium">
               {firstName + ' ' + lastName}
            </p>
         </div>
      </Link>
   )
}
