"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { PaginationMeta } from "@/types/pagination";
import { FC } from "react";

interface PaginationSectionProps extends PaginationMeta {
  onChangePage: (page: number) => void;
}

// Define a type for page numbers
type PageDisplay = number;

const PaginationSection: FC<PaginationSectionProps> = ({
  page,
  take,
  total,
  onChangePage,
}) => {
  const totalPages = Math.ceil(total / take);

  const handlePrev = () => {
    if (page > 1) {
      onChangePage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      onChangePage(page + 1);
    }
  };

  // Generate array of page numbers to display (always showing 3 pages)
  const getPageNumbers = (): PageDisplay[] => {
    const pageNumbers: PageDisplay[] = [];
    const maxPagesToShow = 3; // Maximum number of page buttons to show at once

    // If there are fewer than 3 pages, just show all of them
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Otherwise, create a sliding window of 3 pages
      const startPage = Math.max(1, page - 1); // Always start 1 page before the current page, but not below 1
      const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1); // Ensure we don't exceed total pages

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  // Don't render pagination if there's only one page
  if (totalPages <= 1) {
    return null;
  }

  return (
    <Pagination className="my-12">
      <PaginationContent>
        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePrev();
              }}
            />
          </PaginationItem>
        )}

        {pageNumbers.map((pageNum, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onChangePage(pageNum);
              }}
              isActive={page === pageNum}
              className={page === pageNum ? "font-bold text-blue-500" : ""}>
              {pageNum}
            </PaginationLink>
          </PaginationItem>
        ))}

        {page < totalPages && (
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNext();
              }}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationSection;
