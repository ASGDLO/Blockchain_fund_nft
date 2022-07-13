import React from 'react';
export default function withContainer<Iprops>(Component: any, name?: string): React.ForwardRefExoticComponent<React.PropsWithoutRef<Iprops> & React.RefAttributes<any>>;
