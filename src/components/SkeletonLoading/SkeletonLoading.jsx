import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { Table, TableRow, TableCell } from '@/components/ui/table'
export default function SkeletonLoading() {
  return (
    <div>
      <div className='flex w-full flex-row justify-around mt-14 items-center mb-10'>
        <div className='flex flex-col gap-3'>
          <Skeleton className="h-[10px] w-[50px]" />
          <Skeleton className="h-[25px] w-[150px]" />
        </div>
        <div className='flex flex-col gap-3'>
          <Skeleton className="h-[10px] w-[50px]" />
          <Skeleton className="h-[25px] w-[150px]" />
        </div>
        <div className='flex flex-col gap-3'>
          <Skeleton className="h-[10px] w-[50px]" />
          <Skeleton className="h-[25px] w-[150px]" />
        </div>
        <div className='flex flex-col gap-3'>
          <Skeleton className="h-[10px] w-[50px]" />
          <Skeleton className="h-[25px] w-[150px]" />
        </div>
        <div className='flex flex-col gap-3'>
          <Skeleton className="h-[10px] w-[50px]" />
          <Skeleton className="h-[25px] w-[150px]" />
        </div>
        <div className='flex flex-col gap-3'>
          <Skeleton className="h-[10px] w-[50px]" />
          <Skeleton className="h-[25px] w-[150px]" />
        </div>
        <div className='flex flex-col gap-3 mt-5'>
          <Skeleton className="h-[45px] w-[90px]" />
        </div>
      </div>
        <Table>
          {Array.from({ length: 10 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell colSpan={6}>
                <Skeleton className="h-6 w-full" />
              </TableCell>
            </TableRow>
          ))}
          <div className='flex mt-5 flex-row justify-center'>
            <Skeleton className="h-[30px] w-[50px]"/>
            <Skeleton className="h-[30px] w-[120px] ml-4 mr-4"/>
            <Skeleton className="h-[30px] w-[50px]"/>
          </div>
        </Table>
    </div>
  )
}
