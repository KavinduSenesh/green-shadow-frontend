export function AddField() {
    return (
        <>
            <div className="modal fade" id="addFieldModal" tabIndex="-1" aria-labelledby="addFieldModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addFieldModalLabel">Add New Field</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id="addFieldForm">
                                <div className="mb-3">
                                    <label htmlFor="fieldName" className="form-label">Field Name</label>
                                    <input type="text" className="form-control" id="fieldName" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="fieldLocationX" className="form-label">Location X</label>
                                    <input type="number" className="form-control" id="fieldLocationX" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="fieldLocationY" className="form-label">Location Y</label>
                                    <input type="number" className="form-control" id="fieldLocationY" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="fieldSize" className="form-label">Field Size</label>
                                    <input type="number" className="form-control" id="fieldSize" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="fieldImage1" className="form-label">Upload Image 1</label>
                                    <input type="file" className="form-control" id="image1" accept="image/*" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="fieldImage2" className="form-label">Upload Image 2</label>
                                    <input type="file" className="form-control" id="image2" accept="image/*" required/>
                                </div>
                                <button type="button" className="btn btn-primary" id="saveFieldButton">Save Field
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}