const setSkeletonLoading = (qty: number, skeletonData: any) => {
  const newArray = new Array(qty);
  const skeletonToRender = newArray.fill(0).map((_, i) => {
    const key = `skeleton-key-${i}`;
    return {
      ...skeletonData,
      id: i,
      key,
    };
  });

  return skeletonToRender.map((item) => item);
};

export default setSkeletonLoading;
