import { Author } from '@/lib/types'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import Link from 'next/link'

interface AuthorProps {
   author: Author | undefined
}

export default function AuthorAvatar(
   { author }: AuthorProps
) {
   return (
      <div className="flex items-center gap-3">
         <Link href={`/author/${author?.userName}`}>
            <Avatar>
               <AvatarImage src={author?.avatar} alt={author?.firstName} />
               <AvatarFallback>{author?.firstName}</AvatarFallback>
            </Avatar>
            <div>
               <p className="font-medium">
                  {author?.firstName + ' ' + author?.lastName}
               </p>
            </div>
         </Link>
      </div>
   )
}
