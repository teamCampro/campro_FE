function ClipboardToast({ content }: { content: string }) {
  return (
    <div className='bg-#2b2b2b flex h-46pxr w-255pxr rounded-lg px-64pxr py-12pxr text-white font-body2-bold'>
      {content}
    </div>
  );
}

export default ClipboardToast;
