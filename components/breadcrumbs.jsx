import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Breadcrumb = () => {
  const router = useRouter();
  const pathSegments = router.asPath.split("/").filter((segment) => segment);

  const breadcrumbPaths = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
    return { label: segment, href };
  });

  return (
    <nav className='breadcrumb text-xl'>
      <ul className='flex'>
        {breadcrumbPaths.map((path, index) => (
          <li key={index} className='breadcrumb-item'>
            {path.href ? (
              <Link href={path.href}>
                <span className='breadcrumb-link text-gray-500 hover:opacity-75 transition-all'>
                  {path.label.charAt(0).toUpperCase() + path.label.slice(1)}
                </span>
              </Link>
            ) : (
              <span className='breadcrumb-label text-gray-500'>
                {path.label.charAt(0).toUpperCase() + path.label.slice(1)}
              </span>
            )}
            {index !== breadcrumbPaths.length - 1 && (
              <span className='breadcrumb-separator text-gray-500 mx-2'>
                &gt;
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
